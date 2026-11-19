import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { SongDetailsMain, SongDetailsHeader, SongDetailsHeaderTitle, SongDetailsHeaderSubTitle, SongDetailsInfo, SongDetailsSection, SongDetailsSectionInfo, SongDetailsTracksSection, SongDetailsTracksTitle, SongDetailsTracksList, SongDetailsTrackItem, SongDetailsTrackInfo } from './styles';

function SongDetails() {
    const {id} = useParams();

    const albumUrl = `https://www.theaudiodb.com/api/v1/json/123/album.php?m=${id}`;
    const {
        data: albumData,
        loading: albumLoading,
        error: albumError,
        refetch: retryAlbum
    } = useFetch(albumUrl);

    const tracksUrl = `https://www.theaudiodb.com/api/v1/json/123/track.php?m=${id}`;
    const {
        data: tracksData,
        loading: tracksLoading,
        error: tracksError,
        refetch: retryTracks
    } = useFetch(tracksUrl);

    const album = albumData?.album?.[0];
    const tracks = tracksData?.track || [];

    if (albumLoading || tracksLoading) {
        return <p>Cargando detalles del album y sus canciones...{albumLoading}</p>
    }

    if (albumError) {
        return (
            <div>
                <p>Error al consultar el album: {albumError}</p>

                <button onClick={retryAlbum}>
                    Reintentar consulta de album
                </button>
            </div>
        )
    }

    if (!album) {
        return <p>No se encontro informacion del album.</p>;
    }

    return (
        <SongDetailsMain>

            <SongDetailsHeader>
                <SongDetailsHeaderTitle>Detalles del álbum</SongDetailsHeaderTitle>
                <SongDetailsHeaderSubTitle>{album.strAlbum}</SongDetailsHeaderSubTitle>
                <SongDetailsInfo>{album.strArtist}</SongDetailsInfo>
            </SongDetailsHeader>

            <SongDetailsSection>
                <SongDetailsSectionInfo>
                    <strong>Año:</strong>{' '}
                    {album.intYearReleased || 'No disponible'}
                </SongDetailsSectionInfo>

                <SongDetailsSectionInfo>
                    <strong>Género:</strong>{' '}
                    {album.strGenre || 'No disponible'}
                </SongDetailsSectionInfo>

                <SongDetailsSectionInfo>
                    <strong>Descripción:</strong>{' '}
                    {album.strDescriptionEN || 'No hay descripción disponible.'}
                </SongDetailsSectionInfo>
            </SongDetailsSection>

            <SongDetailsTracksSection>
                <SongDetailsTracksTitle>Canciones del álbum</SongDetailsTracksTitle>

                {tracksError ? (
                    <div>
                        <p>No fue posible cargar las canciones: {tracksError}</p>

                        <button onClick={retryTracks}>
                            Reintentar consulta de canciones
                        </button>
                    </div>
                ) : tracks.length === 0 ? (
                    <p>No se encontraron canciones para este álbum.</p>
                ) : (
                    <SongDetailsTracksList>
                        {tracks.map((track) => {
                            const duration = Number(track.intDuration);

                            const durationText =
                                Number.isFinite(duration) && duration > 0
                                    ? `${Math.floor(duration / 60000)}:${String(
                                        Math.floor((duration % 60000) / 1000)
                                    ).padStart(2, '0')}`
                                    : 'No disponible';

                            return (
                                <SongDetailsTrackItem key={track.idTrack}>
                                    <strong>{track.strTrack}</strong>
                                    <SongDetailsTrackInfo>
                                        {' '} — Duración: {durationText}
                                        {' '} — Pista: {track.intTrackNumber || 'No disponible'}
                                    </SongDetailsTrackInfo>
                                </SongDetailsTrackItem>
                            );
                        })}
                    </SongDetailsTracksList>
                )}
            </SongDetailsTracksSection>

        </SongDetailsMain>
    );
}

export default SongDetails;