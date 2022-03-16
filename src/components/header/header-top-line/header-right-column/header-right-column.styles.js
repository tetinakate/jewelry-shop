import styled from '@emotion/styled';

export const HeaderRightColumnStyled = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 40px;
    @media (max-width: 1010px) {
        order: 3;
    }
`;
