import React, { Fragment, useEffect } from "react";
import { LibraryArticle, LibraryTitle, LibraryInfo, LibrarySubTitle } from "./styles";

const Library = ({ songs }) => {

    return (
        <Fragment>
            <LibraryTitle>Mi biblioteca</LibraryTitle>

            {songs.length === 0 ? (
                <LibraryInfo>Aún no has agregado canciones a tu biblioteca.</LibraryInfo>
                ) : (
                <section>
                    {songs.map((song) => {
                        const { id, titulo, artista, duracion } = song;

                        return (
                            <LibraryArticle key={id}>
                                <LibrarySubTitle>{titulo}</LibrarySubTitle>
                                <LibraryInfo>Artista: {artista}</LibraryInfo>
                                <LibraryInfo>Duración: {duracion}</LibraryInfo>
                            </LibraryArticle>
                        );
                    })}
                </section>
            )}
        </Fragment>
    );
};

export default Library;