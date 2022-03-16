import React from 'react';
import PropTypes from 'prop-types';
import { LinksStyled } from './links.styles';

export const Links = ({
    link, title, mode, marker, bold
}) => (
    mode === 'simple' ? <LinksStyled to={link} mode={mode} bold={bold}>{title}</LinksStyled> : <LinksStyled to={link} mode={mode} marker={marker}>{title}</LinksStyled>
);
Links.propTypes = {
    mode: PropTypes.oneOf(['info', 'contact', 'simple']),
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    marker: PropTypes.oneOf(['arrow', 'phone', 'mail', 'none']),
    bold: PropTypes.oneOf(['normal', 'bold']),
};

Links.defaultProps = {
    mode: 'simple',
    marker: 'none',
    bold: 'normal',
};
