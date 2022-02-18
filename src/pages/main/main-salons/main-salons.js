import React from "react";

import { MainSalonsStyled, MainSalonsTxtNormalStyled, MainSalonsTxtBoldStyled, MainSalonsTxtSmallStyled, MainSalonsBtnStyled } from "./main-salons.styles";

export const MainSalons = () => {
    return(
        <MainSalonsStyled>
            <MainSalonsTxtNormalStyled>Не знаете, что выбрать?</MainSalonsTxtNormalStyled>
            <MainSalonsTxtBoldStyled>Посетите наши салоны в Москве</MainSalonsTxtBoldStyled>
            <MainSalonsTxtSmallStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.</MainSalonsTxtSmallStyled>

            <MainSalonsBtnStyled>наши салоны</MainSalonsBtnStyled>

        </MainSalonsStyled>

    )
}