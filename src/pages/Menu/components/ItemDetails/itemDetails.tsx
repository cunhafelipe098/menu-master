
import Counter from '../../../../components/Counter';

import { useDispatch } from 'react-redux'
import { addNewItem } from '../../../../components/Store/Slices/basket'
import type { RadioChangeEvent } from 'antd';
import { Image, Radio, Space } from 'antd';
import { StyledModal, ContainerDetail, Label, Description, StyledButton, ModifierTitles } from './itemDetails.styles';

import imgModal from '../../../../assets/61a7ae34affd8 1.png';
import { useState } from 'react';

function ItemDetails(props: any) {

    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);
    const dispatch = useDispatch()

    const onChange = (e: RadioChangeEvent) => {
        setPrice(e.target.value);
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
                        <Counter count={count} setCount={setCount}/>
                        <StyledButton type="primary" onClick={() => dispatch(addNewItem({label: props.label, amout: count, price}))} >`Add to Order • ${11.75}`</StyledButton>
                    </>
                }
                open={props.isModalOpen} onOk={props.handleOk} onCancel={props.handleCancel}
            >
                <ModifierTitles>Choose your size</ModifierTitles>
                    <Radio.Group onChange={onChange}  defaultValue={price} >
                        <Space direction="vertical">
                            <Radio value={1}>Option A</Radio>
                        </Space>
                    </Radio.Group>
            </StyledModal>
        </>
    )
}

export default ItemDetails