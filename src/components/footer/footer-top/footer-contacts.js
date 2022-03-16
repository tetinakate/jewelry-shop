import React from 'react';
import { FooterContactListStyled } from '../footer.styles';
import { Links } from '../../elements/links';

export const FooterContacts = () => {
    const contacts = [
        {
            link: 'tel:+78122345655', title: '8 (812) 234-56-55', marker: 'phone'
        },
        {
            link: 'tel:+78122345655', title: '8 (812) 234-56-55', marker: 'phone'
        },
        {
            link: 'mailto:ojjo@ojjo.ru', title: 'ojjo@ojjo.ru', marker: 'mail'
        },

    ];

    const contactsElement = contacts.map(
        (item) => <Links key={item.title} link={item.link} title={item.title} mode="contact" marker={item.marker} />
    );
    return (
        <FooterContactListStyled>
            {contactsElement}
        </FooterContactListStyled>
    );
};
