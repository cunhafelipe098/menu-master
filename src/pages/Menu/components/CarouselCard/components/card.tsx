import { Image } from 'antd';
import { Page } from './card.styles';

function Card(props: any) {
    return (
        <Page>
            <Image 
                src={props.image}
                style={{ borderRadius: '4rem', width: '4rem', height: '4rem'}}
                placeholder
                preview={false}
            />
            <div>{props.label}</div>
        </Page>
    )
}

export default Card;