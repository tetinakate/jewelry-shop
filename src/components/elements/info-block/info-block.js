import React from 'react';
import PropTypes from 'prop-types';
import { InfoBlockStyled, InfoHeadStyled } from './info-block.styles';

export const InfoBlock = ({ children, head }) => (
    <InfoBlockStyled>
        <InfoHeadStyled>{head}</InfoHeadStyled>
        {children}
    </InfoBlockStyled>
);

InfoBlock.propTypes = {
    children: PropTypes.isRequired,
    head: PropTypes.string.isRequired,
};
