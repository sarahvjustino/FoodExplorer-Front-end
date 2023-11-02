import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;  
    display: grid;
    place-items: center;
    align-content: center;
    grid-row-gap: 7.3rem;

    @media (min-width: 1024px) {
        place-content: center;
        grid-template-columns: 1fr 60%;
    }
`

export const Form = styled.form`
    width: 100%;
    max-width: 31.6rem;
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 3.2rem;

    h1{
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;
        display: none;
    }

    > a{
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    @media (min-width: 1024px) {
        max-width: 47.8rem;
        padding: 6.4rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        border-radius: 1.6rem;

        > h1{
            display: inline;
        }
    }
`
