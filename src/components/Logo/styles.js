import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.8rem;

    span{
        display: ${({ $isAdmin }) => $isAdmin ? "inline" : "none"};
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        line-height: 160%
    }


    > img{
        max-width: 13rem;
        @media (min-width: 1024px) {
            max-width: 32.6rem;
        }
    }


`