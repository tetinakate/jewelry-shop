import React from "react";
import { HeaderTopLineStyled, HeaderMenuListStyled, HeaderLogoStyled, LinkStyled } from "./header-top-line.styles";
import { HeaderRightColumn } from "./header-right-column";
import IMG from "../../../assets/icons"

export const HeaderTopLine = () => {
    return (
        <HeaderTopLineStyled>
            <HeaderMenuListStyled>
                <LinkStyled to="#">Контрагентам</LinkStyled>
                <LinkStyled to="#">Дизайнерам</LinkStyled>
                <LinkStyled to="#">Вакансии</LinkStyled>
            </HeaderMenuListStyled>

            <HeaderLogoStyled>
                <img src={IMG.logo} alt="logo" />
            </HeaderLogoStyled>

            <HeaderRightColumn />

        </HeaderTopLineStyled>
    )
}