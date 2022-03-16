import styled from '@emotion/styled';

const theme = {
    dark: {
        color: '#FFF',
        border: '#FFF',
        bkg: '#333333',
    },
    light: {
        color: '#333333',
        border: '#333333',
        bkg: '#FFF',
    },
};

const size = {
    lg: 18,
    sm: 14,
};

export const ButtonStyled = styled('button')(({ mode, size: s, style }) => `
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    text-align: center;

    color: ${theme[mode]?.color};
    background: ${theme[mode]?.bkg};
    border: 1px solid ${theme[mode]?.border};
    font-size: ${size[s]}px;
    padding: 15px 35px;

    &:hover {
        opacity: 0.7;
    }

    ${style && `
        color: red;

        &:hover {
            opacity: 0.7;
        }
    `}
`);
