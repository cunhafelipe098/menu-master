import { Layout } from 'antd';
import styled from 'styled-components';

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    max-width: 1024px;
    margin-top: 1rem;
`;

export const LayoutContainer = styled(Layout)`

    .ant-layout-header {
        display: flex;
        justify-content: center;
    }
    
    .ant-menu-overflow {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 760px;
        width: 100%;
    }
`;