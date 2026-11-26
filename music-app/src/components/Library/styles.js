import styled from 'styled-components';

const LibraryArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 35%;
    margin-left: 20px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #0278af;
    margin-bottom: 20px;
`;

const LibraryTitle = styled.h2`
    color: #fff;
    margin-left: 20px;
    margin-bottom: 20px;
`;

const LibraryInfo = styled.p`
    color: #fff;
    margin-left: 20px;
    margin-bottom: 5px;
`;

const LibrarySubTitle = styled.h3`
    color: #0278af;
    margin-left: 20px;
    margin-bottom: 5px;
`;

const LibraryRemoveButton = styled.button`
    background-color: #0278af;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 10px 20px;
    margin-left: 20px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: all 0.1s ease;

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
    LibraryArticle,
    LibraryTitle,
    LibraryInfo,
    LibrarySubTitle,
    LibraryRemoveButton
};