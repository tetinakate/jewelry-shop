import styled from '@emotion/styled';
import ICO from '../../../assets/icons';

export const SubscribeBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 773px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    @media (max-width: 790px) {
        width: 97%;
        height: auto;
        justify-content: center;
    }
`;
export const MainSubscribeLinksStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 248px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
`;
export const MainSubscribeLinksItemStyled = styled.div`
    font-size: 18px;
    position: relative;
    padding: 0 0 0 37px;
    margin-bottom: 15px;
    &::before{
        content: url(${ICO.listArrow});
        position: absolute;
        top: 0;
        left: 0;

    }
`;
