import React from 'react';
import PropTypes from 'prop-types';
import { HeadStyled } from './head.styles';

export const Head = ({
    children, mode, size, font
}) => (
    <HeadStyled mode={mode} size={size} font={font}>
        {children}
    </HeadStyled>
);

Head.propTypes = {
    children: PropTypes.isRequired,
    mode: PropTypes.oneOf(['dark', 'light']),
    size: PropTypes.oneOf(['sm', 'lg']),
    font: PropTypes.oneOf(['normal', 'bold']),
};

Head.defaultProps = {
    mode: 'dark',
    size: 'sm',
    font: 'normal',
};
