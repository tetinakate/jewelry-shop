import React from "react";
import { MainArticleBlockElementStyled, MainArticleBlockElementTextStyled } from "./main-article-block.styles";

export const MainArticleBlockElement = ({ src, alt }) => {
    return(
        <MainArticleBlockElementStyled>
            <img src={src} alt={alt} />

            <MainArticleBlockElementTextStyled>{alt}</MainArticleBlockElementTextStyled>


        </MainArticleBlockElementStyled>

    )
}