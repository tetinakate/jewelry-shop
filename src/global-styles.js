import React from 'react';
import { injectGlobal } from '@emotion/css';
import { Global } from '@emotion/react';
import GilroyBold from "./assets/fonts/Gilroy-Bold.ttf";
import GilroyLightEOT from "./assets/fonts/Gilroy-Light.eot";
import GilroyLightTTF from "./assets/fonts/Gilroy-Light.ttf";
import GilroyLightWOFF from "./assets/fonts/Gilroy-Light.woff";
import GilroyLightWOFF2 from "./assets/fonts/Gilroy-Light.woff2";
import NotoSerifRegular from "./assets/fonts/NotoSerif-Regular.ttf";
import NotoSerifBold from "./assets/fonts/NotoSerif-Bold.ttf";

injectGlobal`
    @font-face {
        font-family: 'GilroyBold';
        font-style: normal;
        font-weight: bold;
        src: url(${GilroyBold}) format('opentype');
    }
    @font-face {
        font-family: 'GilroyLight';
        font-style: normal;
        font-weight: normal;
        src: url(${GilroyLightEOT}) format('eot'),
            url(${GilroyLightTTF}) format('opentype'),
            url(${GilroyLightWOFF}) format('woff'),
            url(${GilroyLightWOFF2}) format('woff2');
    }
    @font-face {
        font-family: 'NotoSerifRegular';
        font-style: normal;
        font-weight: normal;
        src: url(${NotoSerifRegular}) format('opentype');
    }
    @font-face {
        font-family: 'NotoSerifBold';
        font-style: normal;
        font-weight: bold;
        src: url(${NotoSerifBold}) format('opentype');
    }
    * {
        box-sizing: border-box;
        font-family: GilroyLight;
        font-size: 14px;
        color: #FFFFFF;
    }
`;

export const GlobalStyled = () => (
    <Global
        styles=
        {{
            body: {
                margin: '0 auto',
                padding: 0
            },
            ul: {
                margin: 0,
                padding: 0
            }
        }}
    />
)