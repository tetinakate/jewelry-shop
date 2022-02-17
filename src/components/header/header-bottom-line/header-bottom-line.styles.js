import styled from "@emotion/styled";

export const HeaderBottomLineStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: center;
    align-items: center;
    gap: 65px;
`;

export const HeaderText = styled.div`
    font-family: 'NotoSerifBold';
    font-size: 36px;
    line-height: 49px;
    text-align: center;
`;

export const HeaderCatalogButton = styled.div`
    background: #333333;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 15px 35px;
    cursor: pointer;
    width: 261px;
    height: 51px;
    : hover{
        opacity: 0.7;
    }

`;