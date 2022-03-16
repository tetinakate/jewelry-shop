import styled from '@emotion/styled';
import IMG from '../../../assets/icons';

const listType = {
    category: {
        bottom: '30px',
        left: '0',
        fontSize: '24px',
        width: '100%',
        height: 'auto',
        textTransform: 'uppercase',
        margin: '0 auto 0 auto',
        gap: '30px 30px',
        heightItem: 'auto',
        maxWidth: 'auto',

    },
    article: {
        bottom: '35px',
        left: '70px',
        fontSize: '21px',
        width: '210px',
        height: '87px',
        textTransform: 'none',
        margin: '0 auto 60px auto',
        gap: '30px 30px',
        heightItem: 'auto',
        maxWidth: 'auto',

    },
    mixed: {
        bottom: '0',
        left: '0',
        fontSize: '21px',
        width: 'auto',
        height: '300px',
        textTransform: 'none',
        margin: '0 auto 0px auto',
        gap: '0',
        heightItem: '300px',
        maxWidth: '555px',

    },
};

export const ListStyled = styled('div')(({ listType: lt }) => `
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-between;
    align-items: center;
    gap: ${listType?.[lt].gap};
    margin: ${listType?.[lt]?.margin};

    & .video::before{
        content: url(${IMG.video});
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -35px; 
        margin-left: -35px; 
    }
    & .video:hover::before{
        opacity: 0.7;
    }

    @media (max-width: 1145px) {
        width: ${listType?.[lt].maxWidth};
        margin: ${listType?.[lt].margin};
        justify-content: center;
    }
`);

export const ListItemStyled = styled('div')(({ listType: lit }) => `
    position: relative;
    height: ${listType?.[lit]?.heightItem};
`);

export const ListItemTextStyled = styled('div')(({ listType: lt }) => `
    position: absolute;
    text-align: center;
    margin: 0 auto;
    bottom: ${listType?.[lt].bottom};
    left: ${listType?.[lt].left};
    font-size: ${listType?.[lt]?.fontSize};
    width: ${listType?.[lt]?.width};
    height: ${listType?.[lt]?.height};
    text-transform: ${listType?.[lt]?.textTransform};
`);
