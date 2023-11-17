import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 11.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_600};

    grid-area: header;
    display:flex;
    align-items: center;
    justify-content: space-between;

    padding: 2.4rem 2.8rem;

    .hide{
        display: none;
    }

    svg {
        font-size: 2.5rem;
        cursor: pointer;

        > :nth-child(2){
            position: relative;
        }

        > path{
            stroke: ${({ theme }) => theme.COLORS.WHITE};;
        }
    }

    div{
        >img{
            @media (min-width: 1024px) {
                max-width: 15rem;
            }   
        }
    }
`