import React from 'react';
import PropTypes from 'prop-types';
import { LinkIconStyled, IconStyled } from './icon.styles';

export const Icon = ({
    mode, link, src, alt
}) => (
    mode === 'iconLink' ? <LinkIconStyled to={link}><IconStyled src={src} alt={alt} /></LinkIconStyled> : <IconStyled src={src} alt={alt} />
);

Icon.propTypes = {
    mode: PropTypes.oneOf(['iconLink', 'icon']),
    link: PropTypes.isRequired,
    src: PropTypes.isRequired,
    alt: PropTypes.isRequired,
};

Icon.defaultProps = {
    mode: 'icon',
};
