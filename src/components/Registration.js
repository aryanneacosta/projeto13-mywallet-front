import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postSignUp } from "../services/mywallet";

export default function Registration() {
    const [form, setForm] = useState({ name: '', email: '', password: '', passwordconf: ''});
    const navigate = useNavigate();

    function registration(event) {
        event.preventDefault();

        postSignUp({
            name: form.name,
            email: form.email,
            password: form.password,
            passwordconf: form.passwordconf
        })
            .then(resposta => {
                navigate('/');
            })
            .catch(resposta => {
                alert('erro ao cadastrar. Tente novamente!');
            })
    }

    return (
        <Container>
            <Title>MyWallet</Title>
            <Form onSubmit={registration}>
                <input
                    type='name'
                    name='name'
                    value={form.name}
                    placeholder='Nome'
                    required
                    onChange={e => setForm({...form, name: e.target.value})}
                />
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
                <input
                    type='passwordconf'
                    name='passwordconf'
                    value={form.passwordconf}
                    placeholder='Confirme a senha'
                    required
                    onChange={e => setForm({...form, passwordconf: e.target.value})}
                />
                <button type="submit">Cadastrar</button>
            </Form>
            <Link to={'/'}>
                <Register>
                    Já tem uma conta? Entre agora!
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