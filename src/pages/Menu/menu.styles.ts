import styled from 'styled-components';


export const Page = styled.div`
   
`;

export const Container = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    align-items: center;
    margin-top: 1rem;
    background-color: #F8F9FA;
    padding: 1rem;

    @media only screen and (max-width: 650px) {
        grid-template-columns: 1fr;
    }

    @media only screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

export const MainContent = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    max-width: 600px;
    padding: 0 1rem;
    background-color: #FFFFFF;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const DesktopBasket = styled.div`
    display: flex;
    width: 320px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    padding: 2rem;
    background-color: #FFFFFF;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MenuSection = styled.h1`
    font-weight: 500px;
    size: 24px;
    line-height: 28.13px;
    color: #121212;
    letter-spacing: 0.5px;
`;