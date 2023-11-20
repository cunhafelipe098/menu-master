import styled from 'styled-components';
import { Modal } from 'antd';

export const ContainerDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;
`;

export const Label = styled.h2`
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

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0px;
  }

  .ant-modal-close {
    border-radius: 1rem;
    background: snow;
    &:hover {
        background-color: #f0f0f0;
    }
  }

  .ant-modal-header {
    .ant-image {
      object-fit: cover; 
      width: -webkit-fill-available;
    }
  }

  .ant-modal-body {
    padding: 1rem;
  }

  .ant-modal-footer {
    padding: 1rem;
  }
`;