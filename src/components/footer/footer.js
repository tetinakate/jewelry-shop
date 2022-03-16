import React from 'react';
import { FooterTop } from './footer-top';
import { FooterBottom } from './footer-bottom';
import {
    FooterStyled,
} from './footer.styles';

export const Footer = () => (
    <FooterStyled>
        <FooterTop />
        <FooterBottom />
    </FooterStyled>
);
