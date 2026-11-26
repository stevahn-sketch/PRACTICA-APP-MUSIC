
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import SongDetails from './components/SongDetails/SongDetails';
import Library from './components/Library/Library';
import SearchBar from './components/SearchBar/SearchBar';

import useFetch from './hooks/useFetch';

import { ThemeProvider } from 'styled-components';
import Theme from './theme/index';
import GlobalStyle from './theme/GlobalStyles';

function AppContent() {

    const [searchedArtist, setSearchedArtist] = useState('');

    const library = useSelector(state => state);

    const apiUrl = searchedArtist
        ? `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(searchedArtist)}`
        : null;

    const { data, loading, error, refetch } = useFetch(apiUrl);

    const albums = data?.album || [];

    useEffect(() => {
        console.log('La app se ha cargado correctamente.');
    }, []);

    useEffect(() => {
        console.log('La biblioteca ha sido actualizada');
    }, [library]);

    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />

            <div className="App">

                <Header />

                <Routes>

                    <Route
                        path="/"
                        element={
                            <>
                                <SearchBar onSearch={setSearchedArtist} />

                                <SearchResults
                                    albums={albums}
                                    loading={loading}
                                    error={error}
                                    retryFetch={refetch}
                                />
                            </>
                        }
                    />

                    <Route
                        path="/song/:id"
                        element={<SongDetails />}
                    />

                    <Route
                        path="/library"
                        element={<Library />}
                    />

                </Routes>

            </div>
        </ThemeProvider>
    );
}

function App() {

    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
