import React from 'react';
import { MainSectionListStyled, MainSectionElementStyled } from './main-section-list.styles';

export const MainSectionList = () => {
    const sections = ['свадьба', 'мужу', 'жене', 'партнеру', 'коллекции', 'редкость'];

    const elements = sections.map(
        (item) => (
            <MainSectionElementStyled key={item}>
                <span>{item}</span>
            </MainSectionElementStyled>
        )
    );

    return (
        <MainSectionListStyled>
            { elements }
        </MainSectionListStyled>
    );
};
