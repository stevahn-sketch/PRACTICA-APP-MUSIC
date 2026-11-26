
import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/libraryActions';

import {
    LibraryArticle,
    LibraryTitle,
    LibraryInfo,
    LibrarySubTitle,
    LibraryRemoveButton
} from './styles';

const Library = () => {

    const songs = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <Fragment>
            <LibraryTitle>Mi biblioteca</LibraryTitle>

            {songs.length === 0 ? (
                <LibraryInfo>
                    Aún no has agregado canciones a tu biblioteca.
                </LibraryInfo>
            ) : (
                <section>
                    {songs.map((song) => {
                        const { id, titulo, artista, album, duracion } = song;

                        return (
                            <LibraryArticle key={id}>
                                <LibrarySubTitle>
                                    {titulo}
                                </LibrarySubTitle>

                                <LibraryInfo>
                                    Artista: {artista}
                                </LibraryInfo>

                                <LibraryInfo>
                                    Álbum: {album || titulo}
                                </LibraryInfo>

                                <LibraryInfo>
                                    Duración: {duracion}
                                </LibraryInfo>

                                <LibraryRemoveButton
                                    onClick={() => dispatch(removeSong(id))}
                                >
                                    Eliminar
                                </LibraryRemoveButton>
                            </LibraryArticle>
                        );
                    })}
                </section>
            )}
        </Fragment>
    );
};

export default Library;
