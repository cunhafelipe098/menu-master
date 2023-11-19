import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Menu from "../pages/Menu";
import LogIn from "../pages/LogIn"
import Contact from "../pages/Contact";


const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Route>
        </Routes>
    )
}
export default RoutesApp