import React from 'react';
import { Wrapper } from '../../components/elements/wrapper';
import { Section } from '../../components/elements/section';
import { Head } from '../../components/elements/head';
import { MainSectionList } from './main-section-list';
import { MainSalons } from './main-salons';
import { MainArticle } from './main-article';
import { MainSocial } from './main-social';
import { MainSubscribe } from './main-subscribe';
import { List } from '../../components/elements/list';
import { categoriesImg } from '../../assets/images';

export const Main = () => {
    const mainText = 'К мероприятиям';
    const mainTextBold = 'Настоящая красота здесь!';

    return (
        <Wrapper>
            <Section mode="light">
                <Head mode="dark" size="sm" font="normal">
                    {mainText}
                </Head>
                <Head mode="dark" size="lg" font="bold">
                    {mainTextBold}
                </Head>

                <MainSectionList />

                <List data={categoriesImg} listType="category" />

            </Section>
            <Section mode="dark">
                <MainSalons />
            </Section>

            <Section mode="light">
                <MainArticle />

                <MainSocial />
            </Section>

            <Section mode="dark">
                <MainSubscribe />
            </Section>

        </Wrapper>
    );
};
