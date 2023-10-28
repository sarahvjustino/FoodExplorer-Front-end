import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-bottom: .8rem;
    > label{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 1.6rem;
        font-weight: 400;
    }
`