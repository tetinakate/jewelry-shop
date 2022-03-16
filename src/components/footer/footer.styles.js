import styled from '@emotion/styled';

const darkColor = '#333333';
export const FooterStyled = styled.footer`
    width: 1110px;
    margin: 0 auto;
    padding-top: 80px;
    color: ${darkColor};
    font-size: 14px;
    
    @media (max-width: 1145px) {
        width: 97%;
    }
`;

export const FooterTopStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    border-bottom: 1px solid ${darkColor};
    padding-bottom: 60px;
    
    @media (max-width: 1145px) {
        justify-content: center;
    }
`;
export const FooterListStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
`;
export const FooterContactListStyled = styled(FooterListStyled)`
    gap: 20px;
`;

export const FooterLinkStyled = styled.a`
    color: ${darkColor};
    cursor: pointer;
    :hover{
        font-weight: bold;
    }
`;

export const FooterInfoText = styled.div`
    color: ${darkColor};
    margin: 0 0 21px 0;
    line-height: 150%;
`;

export const FooterCopyrightText = styled(FooterInfoText)`
    margin: 0 0 0 0;
`;

export const FooterPaymentIcons = styled.div`
    display: flex;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
`;

export const FooterMediaStyled = styled(FooterPaymentIcons)`
    gap: 25px;
`;

export const FooterBottomStyled = styled(FooterTopStyled)`
    color: ${darkColor};
    border-bottom: none;
    padding: 20px 0;
`;
