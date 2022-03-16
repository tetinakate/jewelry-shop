import React from 'react';
import { Button } from '../../../components/elements/button';
import { Head } from '../../../components/elements/head';

import { MainSalonsTxtSmallStyled } from './main-salons.styles';

export const MainSalons = () => {
    const textSalons = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.';
    return (
        <>
            <Head mode="light" size="sm" font="normal">Не знаете, что выбрать?</Head>
            <Head mode="light" size="lg" font="bold">Посетите наши салоны в Москве</Head>
            <MainSalonsTxtSmallStyled>
                {textSalons}
            </MainSalonsTxtSmallStyled>

            <Button
                text="наши салоны"
                mode="light"
                size="lg"
            />

        </>
    );
};
