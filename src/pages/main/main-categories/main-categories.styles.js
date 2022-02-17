import styled from "@emotion/styled";

export const MainCategoriesStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-between;
    align-items: center;
    gap: 30px 30px;
    @media (max-width: 1145px) {
        width: 100%;
        justify-content: center;
    }
`;