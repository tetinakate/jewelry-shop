import React from "react";
import { HeaderBottomLineStyled, HeaderText, HeaderCatalogButton } from "./header-bottom-line.styles";
import { HeaderBrands } from "./header-brands";

export const HeaderBottomLine = () => {
    const text = "Долго, дорого, богато!";

    return(
        <HeaderBottomLineStyled>
            <HeaderText>{text}</HeaderText>

            <HeaderCatalogButton>каталог изделий</HeaderCatalogButton>

            <HeaderBrands />

        </HeaderBottomLineStyled>

    )
}