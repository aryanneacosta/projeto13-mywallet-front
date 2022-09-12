import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { postTransactions } from "../services/mywallet";

export default function Income() {
    const [form, setForm] = useState({ value: '', description: '', type: 'income' });
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    function income(event) {
        event.preventDefault();

        postTransactions({
            value: form.value,
            description: form.description,
            type: form.type
        }, user.token)
            .then(resposta => {
                navigate('/home');
            })
            .catch(resposta => {
                alert('erro ao cadastrar entrada. Tente novamente!')
            })
    }

    return (
        <Container>
            <Header>Nova entrada</Header>
            <Form onSubmit={income}>
                <input
                    type='value'
                    name='value'
                    value={form.value}
                    placeholder='Valor'
                    required
                    onChange={e => setForm({...form, value: e.target.value})}
                />
                <input
                    type='description'
                    name='description'
                    value={form.description}
                    placeholder='Descrição'
                    required
                    onChange={e => setForm({...form, description: e.target.value})}
                />
                <button type="submit">Salvar entrada</button>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--roxo-fundo);
`;

const Header = styled.div`
    width: 328px;
    margin-top: 25px;
    display: flex;
    font-size: 26px;
    font-family: 'Raleway';
    font-weight: 700;
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