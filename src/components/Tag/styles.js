import styled from "styled-components";

export const Container = styled.span`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    text-align: center;
    padding: 0.4rem 0.8rem;
    border-radius: .5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`