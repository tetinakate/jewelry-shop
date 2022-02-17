import React from "react";
import { MainCategoriesStyled } from "./main-categories.styles";
import { MainCategoriesElement } from "../main-categories-element";
import { categoriesImg } from "../../../assets/images";

export const MainCategories = () => {
    const elements = categoriesImg.map(el => {
        return <MainCategoriesElement src={el.src} alt={el.alt} key={el.alt} />
    })
    return(
        <MainCategoriesStyled>
            { elements }
        </MainCategoriesStyled>
    )
}