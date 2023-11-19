import styled from 'styled-components';
import { Modal } from 'antd';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
    }
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

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0px;
  }

  .ant-modal-close {
    border-radius: 1rem;
    &:hover {
        background-color: #f0f0f0;
    }
  }

  .ant-modal-header {
    background: snow;
  }

  .ant-modal-body {
    padding: 1rem;
  }

  .ant-modal-footer {
    padding: 1rem;
  }
`;