import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchSection = styled.section`
    width: 50%;
    border: 1px solid #0278af;
    border-radius: 10px;
    margin-left: 20px;
`;

const SearchTitle = styled.h2`
    color: #fff;
    margin-top: 45px;
    margin-bottom: 5px;
    margin-left: 20px;
`;

const SearchArticle = styled.article`
    width: 96%;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
`;

const SearchSubTitle = styled.h2`
    margin-top: 25px;
    font-weight: bold;
    color: #0278af;
`;

const SearchInfo = styled.p`
    margin-top: 28px;
    margin-left: 15px;
    color: #fff;
`;

const SearchButton = styled.button`
    margin-left: 15px;
    background-color: ${({ isAdded }) =>
        isAdded ? '#6c757d' : '#0278af'};
    color: #fff;
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: ${({ isAdded }) =>
        isAdded ? 'not-allowed' : 'pointer'};
    height: 37px;
    margin-top: 20px;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${({ isAdded }) =>
            isAdded ? '#6c757d' : '#fff'};
        color: ${({ isAdded }) =>
            isAdded ? '#fff' : '#0278af'};
        transform: ${({ isAdded }) =>
            isAdded ? 'none' : 'scale(1.05)'};
    }

    &:active {
        transform: ${({ isAdded }) =>
            isAdded ? 'none' : 'scale(0.95)'};
    }
`;

const SearchLink = styled(Link)`
    margin-top: 25px;
    color: #0278af;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.2s ease;

    &:hover {
        color: #fff;
        text-decoration: underline;
    }
`;

export {
    SearchSection,
    SearchTitle,
    SearchArticle,
    SearchSubTitle,
    SearchInfo,
    SearchButton,
    SearchLink
}