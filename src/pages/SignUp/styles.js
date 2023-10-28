import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;  
    display: grid;
    place-items: center;
`

export const Form = styled.form`
    width: 100%;
    max-width: 31.6rem;
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 3.2rem;

    > a{
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`

export const Brand = styled.div`
    display: flex;
    justify-content: center; 
    width: 100%;
    margin-bottom: 7.3rem;
`
