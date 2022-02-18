import styled from "@emotion/styled";
import IMG from "../../../assets/images";


export const MainSalonsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    background: url(${IMG.salonsBcg});
    background-size: cover;
    height: 541px;
    padding: 100px 0;
    margin-bottom: 120px;
    @media (max-width: 750px) {
        height: auto;
    }

`;
export const MainSalonsTxtNormalStyled = styled.div`
    font-size: 21px;
    margin-bottom: 15px;
`;
export const MainSalonsTxtBoldStyled = styled.div`
    font-family: 'NotoSerifBold';
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 45px;
`;
export const MainSalonsTxtSmallStyled = styled.div`
    font-size: 18px;
    margin: 0 auto 60px auto;
    width: 730px;
    @media (max-width: 750px) {
        width: 97%;
    }
`;
export const MainSalonsBtnStyled = styled.div`
    width: 224px;
    height: 51px;
    margin: 0 auto;
    background: #FFFFFF;
    color: #333333;
    text-transform: uppercase;
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.1em;
    padding: 15px 33px;
    cursor: pointer;
    :hover{
        opacity: 0.7;
    }
`;