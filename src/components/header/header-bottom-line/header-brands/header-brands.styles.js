import styled from '@emotion/styled';

export const HeaderBrandsStyled = styled.div`
    border-top: 1px solid #FFFFFF;
    padding: 30px 0;
    width: 100%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const HeaderBrandsElement = styled.div`
    border-right: 1px solid #FFFFFF;
    padding-right: 15px;
    &:last-child {
        border: none;
        padding-right: 0px;
    }
`;
