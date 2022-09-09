import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Income from "./components/Income";
import Login from "./components/Login";
import Outcome from "./components/Outcome";
import Registration from "./components/Registration";
import GlobalStyle from "./assets/globalStyles";

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Registration />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/entrada" element={<Income />} />
                    <Route path="/saida" element={<Outcome />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

ReactDOM.render(App(), document.querySelector('.root'));