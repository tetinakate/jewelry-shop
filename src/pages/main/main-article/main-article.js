import React from 'react';
import { MainArticleStyled } from './main-article.styles';
import { Button } from '../../../components/elements/button';
import { Head } from '../../../components/elements/head';
import { articleBlockImg } from '../../../assets/images';
import { List } from '../../../components/elements/list';

export const MainArticle = () => {
    const acticleLinkText = 'Полезные статьи';
    const acticleAdvice = 'Лучшие советы по подбору дорогих подарков';
    const acticleButton = 'читать наш блог';

    return (
        <MainArticleStyled>
            <Head mode="dark" size="sm" font="normal">
                {acticleLinkText}
            </Head>
            <Head mode="dark" size="lg" font="bold">
                {acticleAdvice}
            </Head>

            <List data={articleBlockImg} listType="article" />

            <Button
                text={acticleButton}
                mode="dark"
                size="lg"
            />
        </MainArticleStyled>
    );
};
