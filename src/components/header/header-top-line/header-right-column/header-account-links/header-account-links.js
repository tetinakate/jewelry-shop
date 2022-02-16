import React from "react";
import { HeaderAccountLinksStyled, AutorizationButtonStyled, Buttons, AccountButton, LikeButton } from "./header-account-links.styles";
import Icons from "../../../../../assets/icons";

export const HeaderAccountLinks = () => {
    return(
        <HeaderAccountLinksStyled>
            <AutorizationButtonStyled>Вход/Регистрация</AutorizationButtonStyled>

            <Buttons>
                <AccountButton><img src={Icons.account} /></AccountButton>
                <LikeButton><img src={Icons.like} /></LikeButton>
            </Buttons>
            
        </HeaderAccountLinksStyled>
    )

}