import styled from 'styled-components';
import { Modal, Button } from 'antd';

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

export const ModifierTitle = styled.p`
    font-weight: 700;
    size: 16px;
    line-height: 18.75px;
    color: #464646;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0px;
    display: flex;
    flex-direction: column;
    height: 720px;
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

  .ant-modal-body::-webkit-scrollbar {
    width: 0px;
  }

  .ant-modal-body {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
    padding-bottom: 150px;
    scrollbar-width: thin;
  }

  .ant-modal-footer {
    border-top: none;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1.5rem;
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  border-radius: 1rem;
  align-items: center;
  justify-content: center; 
  width: 100%;
`; 