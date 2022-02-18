import React from "react";
import { MainArticleStyled, MainArticleLinkStyled, MainArticleAdviceStyled, MainArticleBtnStyled } from "./main-article.styles";
import { MainArticleBlock } from "./main-article-block";

export const MainArticle = () => {

    const acticleLinkText = "Полезные статьи";
    const acticleAdvice = "Лучшие советы по подбору дорогих подарков";
    const acticleBtn = "читать наш блог";

    return(
        <MainArticleStyled>

            <MainArticleLinkStyled>{acticleLinkText}</MainArticleLinkStyled>

            <MainArticleAdviceStyled>{acticleAdvice}</MainArticleAdviceStyled>

            <MainArticleBlock />

            <MainArticleBtnStyled>{acticleBtn}</MainArticleBtnStyled>



        </MainArticleStyled>

    )
}