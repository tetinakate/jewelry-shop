import React from "react";
import { HeaderBrandsStyled, HeaderBrandsElement } from "./header-brands.styles";
import IMG from "../../../../assets/images";

export const HeaderBrands = () => {

    const brandsElement = () => {
        const arr = []
        for(let i = 0; i <= 6; i++){
            arr.push(<HeaderBrandsElement key={`${i}`}><img src={IMG.brands} alt={`brand ${i}`} /></HeaderBrandsElement>)
        }
        return arr;
    }

    return(
        <HeaderBrandsStyled>
            {brandsElement().map(e => e)}
        </HeaderBrandsStyled>
    )
}