import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Registration() {
    return (
        <Container>
            <Title>MyWallet</Title>
            <Form>
                <input
                    type='name'
                    name='name'
                    placeholder='Nome'
                    required
                />
                <input
                    type='email'
                    name='email'
                    placeholder='E-mail'
                    required
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Senha'
                    required
                />
                <input
                    type='password-confirm'
                    name='password-confirm'
                    placeholder='Confirme a senha'
                    required
                />
                <button>Cadastrar</button>
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