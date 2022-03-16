import React from 'react';
import { Links } from '../../elements/links';
import {
    FooterCopyrightText, FooterBottomStyled
} from '../footer.styles';

export const FooterBottom = () => {
    const copyright = '(c) 2020 OJJO jewelry';
    return (
        <FooterBottomStyled>
            <FooterCopyrightText>{copyright}</FooterCopyrightText>
            <Links link="#" mode="simple" title="Договор публичной офферты" />
            <Links link="#" mode="simple" title="Контрагентам" />
            <Links link="#" mode="simple" bold="bold" title="Сделано Figma.info" />
        </FooterBottomStyled>

    );
};
