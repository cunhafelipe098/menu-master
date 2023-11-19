import type { CollapseProps } from 'antd';
import { Input, Collapse } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import CarouselCard from './components/CarouselCard';
import Item from './components/Item';


import { Container, MainContent, DesktopBasket, Page, MenuSection } from './menu.styles'


const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: <MenuSection>Burgers</MenuSection>,
    children: <div style={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
      <Item label='Smash Burguer' price='R$33,00' description='100g pressed hamburger, mozzarella cheese, pickle'/>
      <Item label='Smash Burguer' price='R$33,00' description='100g pressed hamburger, mozzarella cheese, pickle'/>
      <Item label='Smash Burguer' price='R$33,00' description='100g pressed hamburger, mozzarella cheese, pickle'/>
    </div>,
  },
];

function Menu() {

  return (
    <Page>
      <Input placeholder="default size" prefix={<SearchOutlined />} />
      <Container>
        <MainContent>
          <CarouselCard/>
          <Collapse defaultActiveKey={[1,2,3]} size='large' expandIconPosition='end'	ghost items={items} />
        </MainContent>
        <DesktopBasket>
          <div>Carrinho</div>
        </DesktopBasket>
      </Container>
    </Page>
  )
}

export default Menu;
