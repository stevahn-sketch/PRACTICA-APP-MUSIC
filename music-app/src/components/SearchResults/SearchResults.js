
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '../../redux/libraryActions';

import {
    SearchSection,
    SearchTitle,
    SearchArticle,
    SearchSubTitle,
    SearchInfo,
    SearchButton,
    SearchLink
} from './styles';

const SearchResults = ({
    albums,
    loading,
    error,
    retryFetch
}) => {

    const dispatch = useDispatch();

    const library = useSelector(state => state);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return (
            <div>
                <p>Ocurrio un error: {error}</p>
                <p>Intenta realizar la busqueda nuevamente.</p>
                <button onClick={retryFetch}>
                    Reintentar busqueda
                </button>
            </div>
        );
    }

    if (!albums || albums.length === 0) {
        return <SearchInfo>No se encontraron albumes.</SearchInfo>;
    }

    return (
        <Fragment>
            <SearchTitle>
                Resultados de la busqueda
            </SearchTitle>

            <SearchSection>
                {albums.map((album) => {

                    const song = {
                        id: album.idAlbum,
                        titulo: album.strAlbum,
                        artista: album.strArtist,
                        album: album.strAlbum,
                        duracion: 'No disponible'
                    };

                    const isAdded = library.some(
                        item => item.id === song.id
                    );

                    return (
                        <SearchArticle key={album.idAlbum}>
                            <SearchSubTitle>
                                {album.strAlbum}
                            </SearchSubTitle>

                            <SearchInfo>
                                Artista: {album.strArtist}
                            </SearchInfo>

                            <SearchInfo>
                                Año: {album.intYearReleased || 'No disponible'}
                            </SearchInfo>

                            <SearchButton
                                isAdded={isAdded}
                                onClick={() => dispatch(addSong(song))}
                                disabled={isAdded}
                            >
                                {isAdded
                                    ? 'Agregada'
                                    : 'Agregar a la biblioteca'}
                            </SearchButton>

                            <SearchLink to={`/song/${album.idAlbum}`}>
                                Ver detalles
                            </SearchLink>

                        </SearchArticle>
                    );
                })}
            </SearchSection>
        </Fragment>
    );
};

export default SearchResults;
