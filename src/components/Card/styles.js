import styled from "styled-components"

export const Container = styled.div`
    min-height: 29.2rem;
    min-width: 21rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border-radius: .8rem;
    padding: 2.4rem;

    @media (min-width: 768px){
        height: 46.2rem;
        width: 30.4rem;
        gap: 1.5rem;
    }

    > button:first-child{
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;
        background: none;
        border: none;
        font-size: 2.4rem;

        @media (min-width: 768px){
            right: 1.8rem;
        }

        > svg{
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    > img{
        width:8.8rem;
        height:8.8rem;

        @media (min-width: 768px){
            height: 17.6rem;
            width: 17.6rem;
        }
    }

    > h1{
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;

        @media (min-width: 768px){
            font-size: 2.4rem;
            font-weight: 700;
            line-height: 140%;
        }
    }

    > p{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: "Roboto", sans-serif;
        font-size: 1.4rem;
        line-height: 160%;
        text-align: center;
    }

    > h2{
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.CAKE_200};

        @media (min-width: 768px){
            font-size: 3.2rem;
            line-height: 160%;
        }
    }
`

export const Wrapper = styled.div`
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > button{
        height: 3.2rem;
    }

    @media (min-width: 768px){
        margin-top: 1.5rem;
        flex-direction: row;

        > button{
            width: 9.2rem;
            height: 4.8rem;
        }
    }
    

`