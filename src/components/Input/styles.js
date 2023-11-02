import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.63rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    border-radius: .8rem;

    > input{
        width: 100%;
        height: 4.8rem;
        padding: 1.2rem 1.4rem;
        border: none;
        font-family: "Roboto", sans-serif;
        font-size: 1.6rem;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
        outline-width: 1px;
        outline-color: ${({ theme }) => theme.COLORS.WHITE};
        
        > ::placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > svg{
        margin-left: .88rem;
    }
`