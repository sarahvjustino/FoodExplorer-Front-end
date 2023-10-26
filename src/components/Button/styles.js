import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: .88rem;
    font-weight: 500;
    padding: .75rem 2rem;
    border: none;
    border-radius: 0.32rem;
    line-height: 1.5rem;
    transition: all .3s;

    &:hover{
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }

    &:disabled{
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
`