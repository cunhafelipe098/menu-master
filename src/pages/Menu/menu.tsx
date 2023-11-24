import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import { Input, Collapse } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CarouselCard from './components/CarouselCard';
import MenuItem from './components/MenuItem';
import { api } from '../../components/Api'
import { Container, MainContent, DesktopBasket, Page } from './menu.styles'

const { Panel } = Collapse;

type Section = {
  label: string;
  image: string;
}

function Menu() {

  const [menu, setMenu] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [defaultActiveKey, setDefaultActiveKey] = useState<any>([]);
  const [sections, setSections] = useState<Section[]>([]);

  const basket = useSelector((state: any) => state.basket.value)

  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {

      const response = await api.get(`/1922b263-87a2-423f-952f-c576c97490f5`);
      setMenu(response.data);
      setDefaultActiveKey(activeKeys(response.data.sections));
      
      setSections(response.data.sections.map((section: any) => ({ 
        label: section.name,
        image: section.images[0].image
      })));
    }, 1);
    setLoading(false);
  }, []);

  const activeKeys = (sections: any) => {
    return Array.from({ length: sections?.length }, (_, index) => sections[index].id);
  }
  

  return (
    <Page>
      <Input placeholder="default size" prefix={<SearchOutlined />} />
      <Container>
        <MainContent>
          <CarouselCard sections={sections}/>
          <Collapse 
            ghost
            activeKey={defaultActiveKey}
            onChange={(items)=>{setDefaultActiveKey(items)}} 
            size='large' 
            expandIconPosition='end'	
          >
            {
              menu.sections && menu.sections.map((section: any) => {                
                return (
                  <Panel header={section.name} key={section.id}>
                    {
                      section.items && section.items.map(({ name, price, description, images, modifiers }: any) => (
                        <MenuItem
                          key={name}
                          label={name}
                          price={price}
                          description={description}
                          image={images && images[0]?.image}
                          modifiers={modifiers}
                        />
                      ))
                    }
                  </Panel>
                );
              })
            }
          </Collapse>
        </MainContent>
        <DesktopBasket>
          <div>Carrinho</div>
          {basket.map((item: any) => (
            <>
              <p>{item.label}</p>
              <p>{item.amout}</p>
              <p>{item.price}</p>
            </>
          
          ))}
          
        </DesktopBasket>
      </Container>
    </Page>
  )
}

export default Menu;
