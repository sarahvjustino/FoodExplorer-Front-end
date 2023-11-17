import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;

    @media (min-width: 768px){
        font-weight: 700;
        font-size: 2rem;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;


        > svg{
            width: 2.4rem;
            height: 2.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`