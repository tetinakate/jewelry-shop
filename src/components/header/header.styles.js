import styled from '@emotion/styled';
import IMG from '../../assets/images';

export const HeaderStyled = styled.header`
    width: 100%;
    height: 950px;
    background-image: url(${IMG.bgc});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 25px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 385px) {
        height: auto;
    }
`;
