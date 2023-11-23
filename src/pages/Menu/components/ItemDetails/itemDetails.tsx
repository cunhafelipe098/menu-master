
import Counter from '../../../../components/Counter';

import { useDispatch } from 'react-redux'
import { addNewItem } from '../../../../components/Store/Slices/basket'
import type { RadioChangeEvent } from 'antd';
import { Image, Radio, Space } from 'antd';
import { StyledModal, ContainerDetail, Label, Description, StyledButton, ModifierTitle } from './itemDetails.styles';

import imgModal from '../../../../assets/61a7ae34affd8 1.png';
import { useState } from 'react';

type Item = {
    name: string;
    price: number;
    available: boolean;
};

type Modifier = {
    name: string;
    items: Item[]
};

type ItemSection = {
    label: string;
    description: string;
    price?: number;
    available?: boolean;
    modifiers: Modifier [];
    isModalOpen: boolean;

    handleOk: () => void;
    handleCancel: () => void;
};

function ItemDetails(props: ItemSection) {

    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

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
                        <StyledButton type="primary" onClick={() => dispatch(addNewItem({label: props.label, amout: count, price}))} >{`Add to Order • ${price}`}</StyledButton>
                    </>
                }
                open={props.isModalOpen} onOk={props.handleOk} onCancel={props.handleCancel}
            >
                {
                    props.modifiers && props.modifiers.map((modifier: Modifier) => {
                        return (
                            <>
                                <ModifierTitle>{modifier.name}</ModifierTitle>
                                <Radio.Group onChange={onChange}  defaultValue={modifier.items[0].price} >
                                    <Space direction="vertical">
                                        {
                                            modifier.items.map((item: Item) => {
                                                return <Radio value={item.price}>
                                                    <p>{item.name}</p>
                                                    <p>{`$ ${item.price}`}</p>
                                                </Radio>
                                            })
                                        }
                                    </Space>
                                </Radio.Group>
                            </>
                        )
                    })
                }
            </StyledModal>
        </>
    )
}

export default ItemDetails