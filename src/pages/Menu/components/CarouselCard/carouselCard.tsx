import { Tabs } from 'antd';
import headerImage from "../../../../assets/header.png";
import Card from './components/card';
import type { TabsProps } from 'antd';

function CarouselCard() {

    const items: TabsProps['items'] = [
        {
            label: <Card image={headerImage} label='Burguers'/>,
            key: 'Burguers'
        },
        {
            label: <Card image={headerImage} label='Drinks'/>,
            key: 'Drinks'
        },
        {
            label: <Card image={headerImage} label='Desserts'/>,
            key: 'Desserts',
        },
        {
            label: <Card image={headerImage} label='Desserts2'/>,
            key: 'Desserts2',
        }
    ];

    return (
        <div style={{width: '100%'}}>
            <Tabs defaultActiveKey="1" items={items}  />
        </div>
    )
}

export default CarouselCard;