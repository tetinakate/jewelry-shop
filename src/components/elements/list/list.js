import React from 'react';
import PropTypes from 'prop-types';
import { ListStyled } from './list.styles';
import { ListItem } from './list-item';

export const List = ({ data, listType }) => {
    const elements = data.map(
        (item) => (
            <ListItem
                key={item.alt}
                src={item.src}
                alt={item.alt}
                video={item?.video}
                listType={listType}
            />
        )
    );
    return (
        <ListStyled listType={listType}>
            { elements }
        </ListStyled>
    );
};

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    listType: PropTypes.oneOf(['category', 'article', 'mixed']),
};

List.defaultProps = {
    listType: 'category'
};
