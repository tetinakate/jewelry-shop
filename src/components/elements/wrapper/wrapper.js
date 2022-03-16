import React from 'react';
import PropTypes from 'prop-types';
import { WrapperStyled } from './wrapper.styles';

export function Wrapper({ children }) {
    return (
        <WrapperStyled>
            {children}
        </WrapperStyled>
    );
}

Wrapper.propTypes = {
    children: PropTypes.isRequired,
};
