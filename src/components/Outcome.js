import styled from "styled-components";

export default function Outcome() {
    return (
        <Container>
        <Header>Nova saída</Header>
        <Form>
            <input
                type='value'
                name='value'
                placeholder='Valor'
                required
            />
            <input
                type='description'
                name='description'
                placeholder='Descrição'
                required
            />
            <button>Salvar saída</button>
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