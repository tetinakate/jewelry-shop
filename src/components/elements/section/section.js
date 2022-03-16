import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyled } from './section.styles';

export const Section = ({ children, mode }) => (
    <SectionStyled mode={mode}>
        { children }
    </SectionStyled>
);

Section.propTypes = {
    children: PropTypes.isRequired,
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
};

Section.DefuultTypes = {
    mode: 'light',
};
