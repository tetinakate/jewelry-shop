import React, { useState, useCallback, useEffect, useRef } from "react";
import { SearchWrapperStyled, SearchButtonStyled , InputStyled, SEARCH_WIDTH } from "./header-search.styles";
import Icons from "../../../../../assets/icons";

export const HeaderSearch = ({handleSetOpen}) => {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef();

    const handleFocus = useCallback((event) => {
        event.target.parentNode.parentNode.style.width = `${SEARCH_WIDTH * 4}px`;
        event.target.parentNode.style.width = `100%`;
        //event.target.parentNode.style.transition = '.9s';
        handleSetOpen(true);
    }, []);
    const handleBlur = useCallback((event) => {
        event.target.parentNode.parentNode.style.width = `auto`;
        event.target.parentNode.style.width = `${SEARCH_WIDTH}px`;
        //event.target.parentNode.style.transition = '.9s';
        handleSetOpen(false);
    }, []);

    const handleChange = (event) => {
        setInputValue(event.target.value);

    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Searching", inputValue);
    }

    useEffect(() => {
        inputRef.current.addEventListener("focus", handleFocus);
        inputRef.current.addEventListener("blur", handleBlur);

        return () => {
            inputRef.current.removeEventListener("focus", handleFocus);
            inputRef.current.removeEventListener("blur", handleBlur);
        }
    }, [])
    
    return(
        <SearchWrapperStyled onSubmit={handleSubmit}>
            <SearchButtonStyled>
                <img src={Icons.search} alt="search" />
            </SearchButtonStyled>
            <InputStyled placeholder="Поиск" ref={inputRef} onChange={handleChange} type="search" />
        </SearchWrapperStyled>
    )
}