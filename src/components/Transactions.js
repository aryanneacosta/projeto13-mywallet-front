import styled from "styled-components";

export default function Transactions({ date, value, description, type}) {
    return (
        <Container>
            <Line>
                <Date>{date}</Date>
                <Description>{description}</Description>
                {type === 'income' ? 
                <Green>{value}</Green>
                :
                <Red>{value}</Red>
                }
            </Line>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 7px;
`;

const Line = styled.div`
    display: flex;
    margin-left: 12px;
    margin-right: 12px;
    font-size: 16px;
`;

const Date = styled.div`
    width: 48px;
    color: var(--cinza-claro);
    margin-right: 13px;
`;

const Description = styled.div`
    width: 190px;
    color: black;
`;

const Green = styled.div`
    color: var(--verde);
`;

const Red = styled.div`
    color: var(--vermelho);
`;