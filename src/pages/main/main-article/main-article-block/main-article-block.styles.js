import styled from "@emotion/styled";

export const MainArticleBlockStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-bottom: 60px;
    @media (max-width: 1145px) {
        justify-content: center;
    }

`;

export const MainArticleBlockElementStyled = styled.div`
    position: relative;

`;

export const MainArticleBlockElementTextStyled = styled.div`
    position: absolute;
    bottom: 35px;
    text-align: center;
    font-size: 21px;
    width: 210px;
    height: 87px;
    margin: 0 auto;
    left: 70px;
`;