import React from 'react';
import { HeaderBottomLineStyled, HeaderText } from './header-bottom-line.styles';
import { HeaderBrands } from './header-brands';
import { Button } from '../../elements/button';

export const HeaderBottomLine = () => (
    <HeaderBottomLineStyled>
        <HeaderText>Долго, дорого, богато!</HeaderText>

        <Button
            text="каталог изделий"
            mode="dark"
            size="lg"
        />

        <HeaderBrands />
    </HeaderBottomLineStyled>
);
