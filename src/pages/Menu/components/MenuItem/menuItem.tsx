import React, { useEffect, useState } from 'react';
import { Image, Modal, Button } from 'antd';

import Counter from '../../../../components/Counter';
import ItemDetails from '../ItemDetails';

import { ContainerDetail, Label, Description, Container, Price } from './menuItem.styles';

import imgModal from '../../../../assets/61a7ae34affd8 1.png';

function MenuItem(props: any) {

    
    
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
            <ItemDetails label={props.label} description={props.description} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
        </>
    )
}

export default MenuItem