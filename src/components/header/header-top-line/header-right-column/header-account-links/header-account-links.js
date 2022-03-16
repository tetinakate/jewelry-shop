import React from 'react';
import {
    HeaderAccountLinksStyled, AutorizationButtonStyled, Buttons, AccountButton, LikeButton,
} from './header-account-links.styles';
import Icons from '../../../../../assets/icons';

export function HeaderAccountLinks() {
    return (
        <HeaderAccountLinksStyled>
            <AutorizationButtonStyled>Вход/Регистрация</AutorizationButtonStyled>

            <Buttons>
                <AccountButton><img src={Icons.account} alt="account" /></AccountButton>
                <LikeButton><img src={Icons.like} alt="like" /></LikeButton>
            </Buttons>
        </HeaderAccountLinksStyled>
    );
}
