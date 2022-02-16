import styled from "@emotion/styled";

export const SEARCH_WIDTH = 97;

export const SearchWrapperStyled = styled.form`
    width: ${SEARCH_WIDTH}px;
    height: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    transition: .3s;
`;
export const SearchButtonStyled = styled.button`
    background: none;
    border: none;
    width: 34px;
    height: 18px;
    padding: 0;
    & img{
        width: 18px;
        height: 18px;
    }
`;

export const InputStyled = styled.input`
    padding: 2px;
    border: none;
    background: none;
    height: 24px;
    width: 100%;
    color: #FFFFFF;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    text-align: revert;

    &:focus {
        outline: none;
        width: 100%;
    }

    &::-webkit-input-placeholder {
        color: #FFFFFF;
    }

    &::-moz-placeholder {
        color: #FFFFFF;
    }
`;