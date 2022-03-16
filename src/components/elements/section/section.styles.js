import styled from '@emotion/styled';
import IMG from '../../../assets/images';

const theme = {
    dark: {
        color: '#FFF',
        border: '#FFF',
        bkg: `url(${IMG.darkBack})`,
        width: '100%',
        height: '541px',
        padding: '100px 0',
    },
    light: {
        color: '#333333',
        border: '#333333',
        bkg: '#FFF',
        width: '1110px',
        height: 'auto',
        padding: '120px 0',
    },
};

export const SectionStyled = styled('div')(({ mode }) => `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 120px 0;
    color: ${theme[mode]?.color};
    background: ${theme[mode]?.bkg};
    width: ${theme[mode]?.width};
    height: ${theme[mode]?.height};
    padding: ${theme[mode]?.padding};
    margin: 0 auto;
    
    @media (max-width: 1145px) {
        width: 100%;
        justify-content: center;
    }

    @media (max-width: 750px) {
        height: auto;
    }

`);
