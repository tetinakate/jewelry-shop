import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './button.styles';

export const Button = ({ text, mode, size }) => (
    <ButtonStyled mode={mode} size={size}>
        {text}
    </ButtonStyled>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['dark', 'light']),
    size: PropTypes.oneOf(['lg', 'sm']),
};

Button.defaultProps = {
    mode: 'light',
    size: 'lg',
};
