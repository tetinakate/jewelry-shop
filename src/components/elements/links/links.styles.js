import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Icons from '../../../assets/icons';

const theme = {
    info: {
        fontSize: '18px',
        color: '#FFFFFF',
        paddingLeft: '37px',
    },
    contact: {
        fontSize: '14px',
        color: '#333333',
        paddingLeft: '40px',
    },
    simple: {
        fontSize: '14px',
        color: '#333333',
        paddingLeft: '0px',
    }
};
const marker = {
    arrow: `${Icons.listArrow}`,
    phone: `${Icons.phone}`,
    mail: `${Icons.mail}`,
    none: 'none',
};
const markerFunction = (markers, markerCheck) => {
    const before = `&::before {
        content: url(${markers});
        width: 20px;
        position: absolute;
        top: 0;
        left: 0;
    }`;
    if (markers !== markerCheck) {
        return before;
    }
    return null;
};

export const LinksStyled = styled(Link)(({ mode, marker: mark, bold }) => `
    text-decoration: none;
    position: relative;
    padding-left: ${theme[mode].paddingLeft};
    font-size: ${theme[mode].fontSize};
    color: ${theme[mode].color};
    font-weight: ${bold === 'bold' ? 'bold' : 'normal'};
    :hover{
        text-decoration: underline;
    }
   ${markerFunction(marker[mark], 'none')}
`);
