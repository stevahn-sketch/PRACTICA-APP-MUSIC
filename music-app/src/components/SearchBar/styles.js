import styled from 'styled-components';

const SearchInput = styled.input`
    width: 12rem;
    margin-left: 20px;
    background-color: #fff;
`;

const SearchButton = styled.button`
    color: #fff;
    background-color: #0278af;

    &:hover {
    background-color: #fff;
    color: #0278af;
    transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export {
    SearchInput,
    SearchButton
}