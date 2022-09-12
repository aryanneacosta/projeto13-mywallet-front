import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { postSignIn } from "../services/mywallet";
import UserContext from "../contexts/UserContext";

export default function Login() {
    const [form, setForm] = useState({ email: '', password: ''});
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function login(event) {
        event.preventDefault();

        postSignIn({
            email: form.email,
            password: form.password
        })
            .then(resposta => {
                setUser(resposta.data);
                navigate('/home');
            })
            .catch(resposta => {
                alert('e-mail ou senha incorretos. Tente novamente ou faça seu cadastro!')
            })
    }

    return (
        <Container>
            <Title>MyWallet</Title>
            <Form onSubmit={login}>
                <input
                    type='email'
                    name='email'
                    value={form.email}
                    placeholder='E-mail'
                    required
                    onChange={e => setForm({...form, email: e.target.value})}
                />
                <input
                    type='password'
                    name='password'
                    value={form.password}
                    placeholder='Senha'
                    required
                    onChange={e => setForm({...form, password: e.target.value})}
                />
                <button type="submit">Entrar</button>
            </Form>
            <Link to={'/cadastro'}>
                <Register>
                    Primeira vez? Cadastre-se!
                </Register>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--roxo-fundo);
`;

const Title = styled.div`
    font-size: 32px;
    font-family: 'Saira Stencil One';
    color: white;
`;

const Form = styled.form`
    margin-top: 24px;
    display: flex;
    flex-direction: column;

    input {
        height: 58px;
        width: 326px;
        border-radius: 5px;
        border: 1px solid var(--roxo-botão);
        font-family: 'Raleway';
        font-size: 20px;
        margin-bottom: 13px;
    }

    button {
        height: 46px;
        width: 326px;
        border-radius: 5px;
        border: 1px solid var(--roxo-botão);
        background-color: var(--roxo-botão);
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: white;
    }
`;

const Register = styled.div`
    margin-top: 36px;
    font-size: 15px;
    font-weight: 700;
    font-family: 'Raleway';
    color: white;
`;