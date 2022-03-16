import React from 'react';
import { FooterListStyled, FooterLinkStyled } from '../footer.styles';

export const FooterLinks = () => (
    <FooterListStyled>
        <FooterLinkStyled to="#">Доставка</FooterLinkStyled>
        <FooterLinkStyled to="#">Оплата</FooterLinkStyled>
        <FooterLinkStyled to="#">Акции</FooterLinkStyled>
        <FooterLinkStyled to="#">Политика конфиденциальности</FooterLinkStyled>
    </FooterListStyled>
);
