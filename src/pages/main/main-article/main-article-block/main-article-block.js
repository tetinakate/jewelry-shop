import React from "react";
import { MainArticleBlockStyled } from "./main-article-block.styles";
import { articleBlockImg } from "../../../../assets/images";
import { MainArticleBlockElement } from "./main-article-block-element";


export const MainArticleBlock = () => {
    const elements = articleBlockImg.map((el, index) => {
        return <MainArticleBlockElement src={el.src} key={index} alt={el.alt} />
    });

    return(
        <MainArticleBlockStyled>
            { elements }
        </MainArticleBlockStyled>
    )
}