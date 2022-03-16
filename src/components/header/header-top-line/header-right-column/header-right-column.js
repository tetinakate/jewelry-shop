import React, { useCallback, useState } from 'react';
import { HeaderRightColumnStyled } from './header-right-column.styles';
import { HeaderSearch } from './header-search';
import { HeaderAccountLinks } from './header-account-links';

export const HeaderRightColumn = () => {
    const [isOpen, setOpen] = useState(false);
    const handleSetOpen = useCallback((flag) => {
        setOpen(flag);
    }, []);

    return (
        <HeaderRightColumnStyled>
            <HeaderSearch handleSetOpen={handleSetOpen} />

            { !isOpen && <HeaderAccountLinks /> }
        </HeaderRightColumnStyled>
    );
};
