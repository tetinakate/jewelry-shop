/* eslint-disable react-hooks/exhaustive-deps, no-console */
import React, {
    useState, useCallback, useEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import {
    SearchWrapperStyled,
    SearchButtonStyled,
    InputStyled,
    SEARCH_WIDTH
} from './header-search.styles';
import Icons from '../../../../../assets/icons';

export const HeaderSearch = ({ handleSetOpen }) => {
    const [inputValue, setInputValue] = useState('');
    const inputReference = useRef();

    const handleFocus = useCallback((event) => {
        event.target.parentNode.parentNode.style.width = `${SEARCH_WIDTH * 4}px`;
        event.target.parentNode.style.width = '100%';
        handleSetOpen(true);
    }, []);

    const handleBlur = useCallback((event) => {
        event.target.parentNode.parentNode.style.width = 'auto';
        event.target.parentNode.style.width = `${SEARCH_WIDTH}px`;
        handleSetOpen(false);
    }, []);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Searching', inputValue);
    };

    useEffect(() => {
        const currentReference = inputReference.current;
        currentReference.addEventListener('focus', handleFocus);
        currentReference.addEventListener('blur', handleBlur);

        return () => {
            currentReference.removeEventListener('focus', handleFocus);
            currentReference.removeEventListener('blur', handleBlur);
        };
    }, []);

    return (
        <SearchWrapperStyled onSubmit={handleSubmit}>
            <SearchButtonStyled>
                <img src={Icons.search} alt="search" />
            </SearchButtonStyled>
            <InputStyled placeholder="Поиск" ref={inputReference} onChange={handleChange} type="search" />
        </SearchWrapperStyled>
    );
};

HeaderSearch.propTypes = {
    handleSetOpen: PropTypes.isRequired,
};
