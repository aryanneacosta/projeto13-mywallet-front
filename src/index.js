import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Income from "./components/Income";
import Login from "./components/Login";
import Outcome from "./components/Outcome";
import Registration from "./components/Registration";
import GlobalStyle from "./assets/globalStyles";
import { useState } from "react";
import UserContext from './contexts/UserContext'

function App() {
    const [user, setUser] = useState({});

    return (
       <>
            <GlobalStyle />
            <BrowserRouter>
                <UserContext.Provider value={{ user, setUser }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Registration />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/entrada" element={<Income />} />
                    <Route path="/saida" element={<Outcome />} />
                </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>   
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));