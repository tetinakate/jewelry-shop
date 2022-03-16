import React from 'react';
import { SubscribeBlock } from './main-subscribe.styles';
import { MainSubscribeLinks } from './main-subscribe-links';
import { MainSubscribeForm } from './main-subscribe-form';
import { Head } from '../../../components/elements/head';

export const MainSubscribe = () => {
    const subscribeSmallHead = 'Полезные советы и персональный предложения';
    const subscribeHead = 'Эксклюзивная рассылка';

    return (
        <>
            <Head mode="light">
                {subscribeSmallHead}
            </Head>
            <Head mode="light" size="lg" font="bold">
                {subscribeHead}
            </Head>

            <SubscribeBlock>
                <MainSubscribeLinks />

                <MainSubscribeForm />
            </SubscribeBlock>
        </>
    );
};
