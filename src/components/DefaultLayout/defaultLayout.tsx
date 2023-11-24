import { Link, Outlet } from 'react-router-dom'
import type { MenuProps } from 'antd';

import headerImage from '../../assets/header.png';

import { Layout, Image, Menu } from 'antd';

import { Page, LayoutContainer } from './defaultLayout.styles';

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
    return (
        <LayoutContainer>
            <Header>
                <Menu theme="dark" mode="horizontal" items={pages} />
            </Header>
            <Image
                src={headerImage}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                placeholder
                preview={false}
            />
            <Page>
                <Content style={{ padding: '0 1rem' }}>
                    <Outlet/>
                </Content>
            </Page>
        </LayoutContainer>
    )
}

export default DefaulLayout;