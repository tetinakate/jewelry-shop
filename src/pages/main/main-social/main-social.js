import React from 'react';
import { MainSocialStyled } from './main-social.styles';
import { Head } from '../../../components/elements/head';
import { socialImg } from '../../../assets/images';
import { List } from '../../../components/elements/list';

export const MainSocial = () => {
    const socialHashTag = '#ojjo_jewerly';
    const socialHead = 'Мы в социальных сетях';

    return (
        <MainSocialStyled>
            <Head mode="dark" size="sm" font="normal">{ socialHashTag }</Head>
            <Head mode="dark" size="lg" font="bold">{ socialHead }</Head>

            <List data={socialImg} listType="mixed" />

        </MainSocialStyled>
    );
};
