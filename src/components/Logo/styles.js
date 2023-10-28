import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center; 
    width: 100%;

    @media (min-width: 1024px) {
        > img{
            width: 60%;
            max-width: 32.6rem;
        }
    }
`