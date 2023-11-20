import React, { useEffect, useState } from 'react';
import { Image, Modal, Button } from 'antd';

import Counter from '../../../../components/Counter';

import { StyledModal, ContainerDetail, Label, Description } from './itemDetails.styles';

import imgModal from '../../../../assets/61a7ae34affd8 1.png';

function ItemDetails(props: any) {

    return (
        <>
            <StyledModal width={503} 
                title={
                    <>
                        <Image
                            src={imgModal}
                            placeholder
                            preview={false}
                        />
                        <ContainerDetail>
                            <Label>{props.label}</Label>
                            <Description>{props.description}</Description>
                        </ContainerDetail>
                    </>
                } 
                footer={
                    <Counter/>
                }
                
                open={props.isModalOpen} onOk={props.handleOk} onCancel={props.handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </StyledModal>
        </>
    )
}

export default ItemDetails