import React from 'react';
import { HeaderBrandsStyled, HeaderBrandsElement } from './header-brands.styles';
import IMG from '../../../../assets/images';

export const HeaderBrands = () => {
    const brandsElement = () => {
        const array = [];
        for (let index = 0; index <= 6; index += 1) {
            array.push(<HeaderBrandsElement key={`${index}`}><img src={IMG.brands} alt={`brand ${index}`} /></HeaderBrandsElement>);
        }
        return array.map((element) => element);
    };

    return (
        <HeaderBrandsStyled>
            {brandsElement()}
        </HeaderBrandsStyled>
    );
};
