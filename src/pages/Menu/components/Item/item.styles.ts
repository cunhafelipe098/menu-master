import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4px;
`;

export const ContainerDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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