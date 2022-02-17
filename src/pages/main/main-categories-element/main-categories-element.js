import React from "react";
import { MainCategoriesElementStyled, MainCategoriesElementNameStyled } from "./main-categories-element.styles";

export const MainCategoriesElement = ({src, alt}) => {
    return(
        <MainCategoriesElementStyled>
            <img src={src} alt={alt} />
            <MainCategoriesElementNameStyled>{alt}</MainCategoriesElementNameStyled>

        </MainCategoriesElementStyled>

    )
}