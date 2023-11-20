import type { CollapseProps } from 'antd';
import { Input, Collapse } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import CarouselCard from './components/CarouselCard';
import MenuItem from './components/MenuItem';


import { Container, MainContent, DesktopBasket, Page, MenuSection } from './menu.styles'

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: <MenuSection>Burgers</MenuSection>,
    children: <div style={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
      <MenuItem label='Smash Burguer' price='R$31,00' description='100g pressed hamburger, mozzarella cheese, pickle'/>
      <MenuItem label='Smash Burguer' price='R$32,00' description='100g pressed hamburger, mozzarella cheese, pickle'/>
      <MenuItem label='Smash Burguer' price='R$33,00' description='100g pressed hamburger, mozzarella cheese, pickle'/>
    </div>,
  },
  {
    key: '2',
    label: <MenuSection>Burgers</MenuSection>,
    children: <div style={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
      <MenuItem label='Smash Burguer' price='R$31,00' description='100g pressed hamburger, mozzarella cheese, pickle'/>
      <MenuItem label='Smash Burguer' price='R$32,00' description='100g pressed hamburger, mozzarella cheese, pickle'/>
      <MenuItem label='Smash Burguer' price='R$33,00' description='100g pressed hamburger, mozzarella cheese, pickle'/>
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
