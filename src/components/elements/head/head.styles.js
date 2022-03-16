import styled from '@emotion/styled';

const theme = {
    dark: {
        color: '#333333',
    },
    light: {
        color: '#FFF',
    },
};
const size = {
    sm: {
        sz: 21,
        marg: 15,
    },
    lg: {
        sz: 30,
        marg: 60,
    },
};
const font = {
    normal: 'GilroyLight',
    bold: 'NotoSerifBold',
};

export const HeadStyled = styled('div')(({ mode, size: s, font: fnt }) => `
    color: ${theme[mode]?.color};
    font-size: ${size[s]?.sz}px;
    font-family: ${font[fnt]};
    margin-bottom: ${size[s]?.marg}px;
    text-align: center;
`);
