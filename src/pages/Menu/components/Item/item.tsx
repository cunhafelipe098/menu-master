import { Image } from 'antd';

import { ContainerDetail, Label, Description, Container, Price } from './item.styles';
function Item(props: any) {
    return (
        <Container>
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
    )
}

export default Item