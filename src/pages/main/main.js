import React from "react";
import { MainStyled, MainWrapperStyled, MainTextStyled, MainTextBoldStyled } from "./main.styles";
import { MainSectionList } from "./main-section-list";
import { MainCategories } from "./main-categories";
import { MainSalons } from "./main-salons";
import { MainArticle } from "./main-article";


export const Main = () => {
    const mainText = "К мероприятиям";
    const mainTextBold = "Настоящая красота здесь!";

    return (
        <MainStyled>
            <MainWrapperStyled>
                <MainTextStyled>{mainText}</MainTextStyled>
                <MainTextBoldStyled>{mainTextBold}</MainTextBoldStyled>

                <MainSectionList />

                <MainCategories />

            </MainWrapperStyled>

            <MainSalons />

            <MainWrapperStyled>
                <MainArticle/>
            </MainWrapperStyled>

        </MainStyled>
    )
}