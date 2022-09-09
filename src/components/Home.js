import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Container>
            <Header>
                <div>Olá, Fulano</div>
                <ion-icon name="log-out-outline"></ion-icon>
            </Header>
            <Content>
                <div>Não há registros de</div>
                <div>entrada ou saída</div>
            </Content>
            <Buttons>
                <Link to={'/entrada'}>
                    <Button>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <div>Nova entrada</div>
                    </Button>
                </Link>
                <Link to={'/saida'}>
                    <Button>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <div>Nova saída</div>
                    </Button>
                </Link>

            </Buttons>
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
    justify-content: space-between;

    div {
        font-size: 26px;
        font-family: 'Raleway';
        font-weight: 700;
        color: white;
    }

    ion-icon[name='log-out-outline'] {
        color: white;
        height: 26px;
        width: 26px;
    }
`;

const Content = styled.div`
    height: 446px;
    width: 326px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: 'Raleway';
    color: var(--cinza-claro);
    margin-top: 22px;
`;

const Buttons = styled.div`
    width: 326px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 13px;
`;

const Button = styled.div`
    height: 114px;
    width: 155px;
    background-color: var(--roxo-botão);
    border-radius: 5px;
    font-size: 17px;
    font-weight: 700;
    font-family: 'Raleway';
    color: white;

    ion-icon[name='add-circle-outline'] {
        color: white;
        height: 22px;
        width: 22px;
        margin-left: 10px;
        margin-top: 11px;
    }

    ion-icon[name='remove-circle-outline'] {
        color: white;
        height: 22px;
        width: 22px;
        margin-left: 10px;
        margin-top: 11px;
    }

    div {
        width: 64px;
        margin-left: 10px;
        margin-top: 32px;
    }
`;