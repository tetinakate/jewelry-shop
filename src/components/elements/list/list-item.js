import React from 'react';
import PropTypes from 'prop-types';
import { ListItemStyled, ListItemTextStyled } from './list.styles';

export function ListItem({
    src, alt, video, listType,
}) {
    const addClass = `${video ? 'video' : 'img'}`;

    return (
        <ListItemStyled className={addClass} listType={listType}>
            <img src={src} alt={alt} />
            {listType !== 'mixed' && <ListItemTextStyled listType={listType}>{ alt }</ListItemTextStyled> }
        </ListItemStyled>
    );
}

ListItem.propTypes = {
    src: PropTypes.isRequired,
    alt: PropTypes.string.isRequired,
    video: PropTypes.isRequired,
    listType: PropTypes.string.isRequired,
};
