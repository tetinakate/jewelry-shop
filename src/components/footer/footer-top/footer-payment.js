import React from 'react';
import { Icon } from '../../elements/icon';
import { FooterInfoText, FooterPaymentIcons } from '../footer.styles';
import { paymentIcons } from '../../../assets/icons';

export const FooterPayment = () => {
    const paymentText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.';
    const paymentIconsElement = paymentIcons.map(
        (item) => <Icon key={item.alt} src={item.src} alt={item.alt} mode="icon" />
    );
    return (
        <>
            <FooterInfoText>{paymentText}</FooterInfoText>
            <FooterPaymentIcons>{paymentIconsElement}</FooterPaymentIcons>
        </>
    );
};
