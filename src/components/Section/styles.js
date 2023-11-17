import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    margin-bottom: .8rem;
    > h2{
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 3.2rem;
        font-weight: 500;
    }
`