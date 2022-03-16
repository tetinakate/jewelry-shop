import React from 'react';
import { InfoBlock } from '../../elements/info-block';
import { FooterLinks } from './footer-links';
import { FooterPayment } from './footer-payment';
import { FooterContacts } from './footer-contacts';
import { FooterMedia } from './footer-media';
import {
    FooterTopStyled, FooterInfoText
} from '../footer.styles';

export const FooterTop = () => {
    const socialMediaText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.';
    return (
        <FooterTopStyled>
            <InfoBlock head="Полезные ссылки">
                <FooterLinks />
            </InfoBlock>
            <InfoBlock head="Оплата">
                <FooterPayment />
            </InfoBlock>
            <InfoBlock head="Контакты">
                <FooterContacts />
            </InfoBlock>
            <InfoBlock head="Социальные сети">
                <FooterInfoText>{ socialMediaText }</FooterInfoText>
                <FooterMedia />
            </InfoBlock>
        </FooterTopStyled>
    );
};
