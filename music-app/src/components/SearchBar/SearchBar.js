
import React, { useState } from 'react';
import { SearchInput, SearchButton } from './styles';

const SearchBar = ({ onSearch }) => {
    const [artist, setArtist] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (artist.trim() === '') {
            return;
        }

        onSearch(artist.trim());
    };

    return (
        <form onSubmit={handleSubmit}>
            <SearchInput
                type="text"
                placeholder="Escribe el nombre de un artista"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
            />

            <SearchButton type="submit">
                Buscar
            </SearchButton>
        </form>
    );
};

export default SearchBar;