import React from 'react';
import { HeaderStyled } from './header.styles';
import { HeaderTopLine } from './header-top-line';
import { HeaderBottomLine } from './header-bottom-line';

export const Header = () => (
    <HeaderStyled>
        <HeaderTopLine />
        <HeaderBottomLine />
    </HeaderStyled>
);
