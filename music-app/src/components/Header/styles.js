import styled from 'styled-components';

const HeaderStyles = styled.header`
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
`;

const HeaderButton = styled.button`
    background-color: #0278af;
    color: #fff;
    border: none;
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
    HeaderStyles,
    HeaderButton
}