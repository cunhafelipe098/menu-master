import React, { useEffect, useState } from 'react';
import { Image, Modal, Button } from 'antd';

import { ContainerDetail, Label, Description, Container, Price, StyledModal } from './item.styles';

import imgModal from '../../../../assets/61a7ae34affd8 1.png';

function Item(props: any) {

    
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    useEffect(() => {
    }, [isModalOpen]);

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
          setIsModalOpen(false);
      };

    return (
        <>
            <Container onClick={showModal}>
                <ContainerDetail>
                    <Label>{props.label}</Label>
                    <Description>{props.description}</Description>
                    <Price>{props.price}</Price>
                </ContainerDetail>
                <Image
                    src={props.image}
                    style={{ borderRadius: '4px', width: '8rem', height: '5.3rem'}}
                    placeholder
                    preview={false}
                />

            </Container>
            <StyledModal width={503} title={
                    <Image
                        src={imgModal}
                        
                        placeholder
                        preview={false}
                    />
              
            } open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </StyledModal>
        </>
    )
}

export default Item