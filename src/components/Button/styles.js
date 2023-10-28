import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    padding: 1.2rem 3.2rem;
    border: none;
    border-radius: .5rem;
    transition: all .3s;

    &:hover{
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }

    &:disabled{
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
`