import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4px;
    margin: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const ContainerDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Label = styled.p`
    font-weight: 500;
    size: 16px;
    line-height: 18.75px;
    color: #121212;
`;

export const Description = styled.p`
    font-weight: 300;
    size: 16px;
    line-height: 18.75px;
    color: #464646;
`;

export const Price = styled.p`
    font-weight: 500;
    size: 16px;
    line-height: 18.75px;
    color: #464646;
    letter-spacing: 0.5px;
`;
