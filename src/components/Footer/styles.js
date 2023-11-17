import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 7.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    padding: 2.4rem .6rem;
    grid-area: footer;
    background: ${({ theme }) => theme.COLORS.DARK_600};

    @media (min-width: 768px) {
        padding: 2.4rem 12.3rem;
        justify-content: space-between;   
    }


    > p{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 160%;
    }

    > div img{
        max-width: 11.4rem;

        @media (min-width: 768px) {
            max-width: 15rem;
        }
    }
`