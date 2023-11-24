import { useEffect, useState } from 'react';

import { Image } from 'antd';
import ItemDetails from '../ItemDetails';
import { ContainerDetail, Label, Description, Container, Price } from './menuItem.styles';

function MenuItem(props: any) {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    
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
                    <Price>{`$ ${props.price}`}</Price>
                </ContainerDetail>
                {
                    props.image && (
                        <Image
                            src={props.image}
                            style={{ borderRadius: '4px', width: '8rem', height: '5.3rem'}}
                            placeholder
                            preview={false}
                        />
                    )
                }
            </Container>
            <ItemDetails 
                label={props.label} 
                description={props.description} 
                modifiers={props.modifiers}
                isModalOpen={isModalOpen} 
                handleOk={handleOk} 
                handleCancel={handleCancel}/>
        </>
    )
}

export default MenuItem