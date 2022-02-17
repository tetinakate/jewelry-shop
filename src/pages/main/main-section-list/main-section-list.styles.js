import styled from "@emotion/styled";

export const MainSectionListStyled = styled.div`
    margin-bottom: 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
    @media (max-width: 1145px) {
        width: 97%;
        justify-content: center;
    }
`;
export const MainSectionElementStyled = styled.div`
    width: 165px;
    height: 61px;
    color: #333333;
    text-transform: uppercase;
    font-family: 'GilroyLight';
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.1em;
    position: relative;
    background: #FFFF padding-box;
    place-self: center;
    & span {
        color: #333333;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        right: 0;
        left: 0;
        bottom: 6px;
        padding: 17px 54px;
        box-sizing: border-box;
        font-size: 16px;
        border: 1px solid #D6D6D6;
        background: #FFFF;
    }
    &::before {
        content: "";
        position: absolute;
        border: 1px solid #D6D6D6;
        top: 6px;
        left: 6px;
        width: 165px;
        height: 54px;
	}
    :hover, :hover span, :hover&::before {
        background: #333333;
        color: #FFFFFF;
        border: 1px solid #333333;
    }
    :hover&::before{
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 0;
        height: 0;
    }
`;