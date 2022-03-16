import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderTopLineStyled = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    width: 1110px;
    margin: 0 auto;
    gap: 100px;
    @media (max-width: 1130px) {
        width: auto;
        gap: 40px;
    }
    @media (max-width: 1010px) {
        flex-direction: column;
    }
`;

export const HeaderMenuListStyled = styled.nav`
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    gap: 40px;
    @media (max-width: 1010px) {
        order: 2;
    }
`;

export const HeaderLogoStyled = styled.div`
    width: 216px;
    height: 52px;
    @media (max-width: 1010px) {
        order: 1;
    }
`;

export const LinkStyled = styled(NavLink)`
    color: #FFFF;
    text-decoration: none;
`;
