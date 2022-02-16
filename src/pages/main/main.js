import React from "react";
import { MainStyled, MainWrapperStyled, MainTextStyled, MainTextBoldStyled } from "./main.styles";
import { MainSectionList } from "./main-section-list";

export const Main = () => {
    const mainText = "К мероприятиям";
    const mainTextBold = "Настоящая красота здесь!";

    return (
        <MainStyled>
            <MainWrapperStyled>
                <MainTextStyled>{mainText}</MainTextStyled>
                <MainTextBoldStyled>{mainTextBold}</MainTextBoldStyled>

                <MainSectionList />

            </MainWrapperStyled>
        </MainStyled>
    )
}