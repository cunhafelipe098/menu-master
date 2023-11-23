
import Counter from '../../../../components/Counter';

import type { RadioChangeEvent } from 'antd';
import { Image, Radio, Space } from 'antd';
import { StyledModal, ContainerDetail, Label, Description, StyledButton, ModifierTitles } from './itemDetails.styles';

import imgModal from '../../../../assets/61a7ae34affd8 1.png';
import { useState } from 'react';

function ItemDetails(props: any) {

    const [value, setValue] = useState(0);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

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
                    <>
                        <Counter/>
                        <StyledButton type="primary" >`Add to Order • ${11.75}`</StyledButton>
                    </>
                }
                open={props.isModalOpen} onOk={props.handleOk} onCancel={props.handleCancel}
            >
                <ModifierTitles>Choose your size</ModifierTitles>
                <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                    <Radio value={1}>Option A</Radio>
                    <Radio value={2}>Option B</Radio>
                    <Radio value={3}>Option C</Radio>
                </Space>
                </Radio.Group>
            </StyledModal>
        </>
    )
}

export default ItemDetails