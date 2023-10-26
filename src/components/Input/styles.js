import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: .88rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    border-radius: .5rem;

    > input{
        width: 100%;
        height: 3rem;
        padding: .75rem;
        border: none;
        font-size: 1rem;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
        
        > ::placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > svg{
        margin-left: .88rem;
    }
`