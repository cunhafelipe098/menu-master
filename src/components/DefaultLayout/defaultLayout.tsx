import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd';

import headerImage from '../../assets/header.png';

import { Layout, Menu, Image } from 'antd';

import { Page } from './defaultLayout.styles';

const { Header, Footer,  Content  } = Layout;


const pages: MenuProps['items'] = [
    {
        key: "menu",
        label: <Link to={"/menu"}>Menu</Link>,
    },
    {
        key: "logIn",
        label: <Link to={"/login"}>LogIn</Link>,
    },
    {
        key: "contact",
        label: <Link to={"/contact"}>Contact</Link>,
    }
]

function DefaulLayout() {
    const location = useLocation();
    const currentUrl = location.pathname;

    const [colorScheme, setColorScheme] = useState('light');

    // const toggleColorScheme = () => {    
    //   setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');  
    //   setTheme(colorScheme === 'dark' ? 'sap_horizon' : 'sap_horizon_dark')
  
    // }

    return (

        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu style={{ display: 'flex', alignItems: 'center', width: '30%'}} theme="dark" mode="horizontal" defaultSelectedKeys={['0']} items={pages} />
            </Header>
            
            <div className="logo" style={{ position: 'relative' }}>
              <Image
                src={headerImage}
                style={{ width: '100vw', height: '150px', objectFit: 'cover' }}
                placeholder
                preview={false}
              />
            </div>
            <Page>
                <Content style={{ padding: '0 1rem' }}>
                    <Outlet/>
                </Content>
            </Page>
        </Layout>
    )
}

export default DefaulLayout;