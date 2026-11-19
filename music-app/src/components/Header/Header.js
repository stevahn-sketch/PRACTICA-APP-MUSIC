
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HeaderStyles,HeaderButton } from './styles';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isHome = location.pathname === '/';
    const isLibrary = location.pathname === '/library';

    return (
        <header className="App-header">
            <HeaderStyles>Mi aplicación de música</HeaderStyles>

            <nav>
                <HeaderButton
                    onClick={() => navigate('/')}
                    disabled={isHome}
                >
                    Inicio
                </HeaderButton>

                <HeaderButton
                    onClick={() => navigate('/library')}
                    disabled={isLibrary}
                >
                    Biblioteca
                </HeaderButton>
            </nav>
        </header>
    );
};

export default Header;
