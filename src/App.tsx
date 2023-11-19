import Router from "./routes/Router";
import GlobalStyle from "./styles/global";
import { ConfigProvider } from 'antd';


function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotActiveWidth: 100
          },
        },
      }}
    >
      <Router/>
      <GlobalStyle/>
    </ConfigProvider>
  )
}

export default App
