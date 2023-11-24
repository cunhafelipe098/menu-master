import { Tabs } from 'antd';
import Card from './components/card';

const { TabPane } = Tabs;

type Section = {
    label: string;
    image: string;
}

type CarouselCardProps = {
    sections: Section[];
  };

function CarouselCard({ sections }: CarouselCardProps) {
    
    return (
        <Tabs style={{width: '100%'}} defaultActiveKey="1">
            {
                sections && sections.map((section: Section) => (
                    <TabPane key={section.label} tab={(<Card image={section.image} label={section.label}/>)} />
                ))
            }
        </Tabs>
)
}

export default CarouselCard;