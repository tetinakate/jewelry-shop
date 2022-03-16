import React from 'react';
import { MainSubscribeLinksStyled } from './main-subscribe.styles';
import { Links } from '../../../components/elements/links';

export const MainSubscribeLinks = () => {
    // const linksAlias = ['Личный менеджер', 'Доставка и оформление', 'Индивидуальный дизайн'];
    const linksAlias = [
        {
            link: '#', title: 'Личный менеджер'
        },
        {
            link: '#', title: 'Доставка и оформление'
        },
        {
            link: '#', title: 'Индивидуальный дизайн'
        },
    ];

    return (
        <MainSubscribeLinksStyled>
            {
                // linksAlias.map(
                //     (item) => (
                //         <MainSubscribeLinksItemStyled key={item}>
                //             {item}
                //         </MainSubscribeLinksItemStyled>
                //     )
                // )
                linksAlias.map(
                    (item) => (
                        <Links key={item.title} mode="info" link={item.link} title={item.title} marker="arrow" />
                    )
                )
            }
        </MainSubscribeLinksStyled>
    );
};
