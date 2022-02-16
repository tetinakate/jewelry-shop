import React from "react";
import { MainSectionListStyled, MainSectionElementStyled } from "./main-section-list.styles";

export const MainSectionList = () => {
    const sectionListText = ["Свадьба", "МУЖУ", "жене", "партнеру", "коллекции", "редкость"];

    const elements = sectionListText.map( (el, index) => <MainSectionElementStyled key={index}><span>{el}</span></MainSectionElementStyled>);

    return(

        <MainSectionListStyled>

            { elements }

        </MainSectionListStyled>

    )
}