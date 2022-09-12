import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { getTransactions } from "../services/mywallet";
import Transactions from "./Transactions";

export default function Home() {
    const { user } = useContext(UserContext);
    const [transactionsList, setTransactionsList] = useState([]);

    useEffect(() => {
        getingList();
    }, []);

    function getingList() {
        getTransactions(user.token)
            .then(resposta => {
                setTransactionsList(resposta.data);
            })
            .catch(resposta => {
                console.log(resposta.data);
            })
    };

    function total() {
        return transactionsList.reduce((previousValue, currentValue) => {
            if (currentValue.type === 'income') {
                return previousValue + Number(currentValue.value);
            } else {
                return previousValue - Number(currentValue.value);
            }
        }, 0);
    };
    const balance = total();

    return (
        <Container>
            <Header>
                <div>Olá, {user.name}</div>
                <ion-icon name="log-out-outline"></ion-icon>
            </Header>
            <Content>
                {transactionsList.length > 0 ?
                    <>
                        <List>
                            {transactionsList.map((transactions, index) => {
                                return (
                                    <Transactions
                                        key={index}
                                        date={transactions.date}
                                        value={transactions.value}
                                        description={transactions.description}
                                        type={transactions.type}
                                    />
                                );
                            })}
                        </List>
                        <Balance>
                            Saldo:
                            {balance > 0 ?
                                <Green>{balance}</Green>
                                :
                                <Red>{balance}</Red>
                            }
                        </Balance>
                    </>
                    :
                    <Empty>
                        <div>Não há registros de</div>
                        <div>entrada ou saída</div>
                    </Empty>
                }
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
    font-size: 20px;
    font-family: 'Raleway';
    color: var(--cinza-claro);
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const List = styled.div`
    margin-top: 23px;
`;

const Empty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`;

const Balance = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
    margin-bottom: 10px;
    font-size: 17px;
    font-weight: 700;
    color: black;
`;

const Green = styled.div`
    color: var(--verde);
`;

const Red = styled.div`
    color: var(--vermelho);
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