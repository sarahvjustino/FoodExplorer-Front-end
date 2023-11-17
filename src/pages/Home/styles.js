import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 11.4rem auto 7.7rem; 
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;
`;

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    padding: 6.2rem 2.4rem;
    grid-area: content;
    overflow-y: auto;
    overflow-x: hidden;

    section{
        margin-top: 2.4rem;
        
        > div{
            display: flex;
            gap: 1.6rem;
        }
    }

    h2{
        font-size: 1.8rem;
        margin-bottom: 2.4rem;
    }
`