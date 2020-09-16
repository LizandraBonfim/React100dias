import React from 'react';
import { Container } from '../styles';
import { Content } from './styles';

function Home() {
    return (
        <Container>
            <Content>
                <li>001 <a href="/day-one">Gerador de refeições aleatórias</a></li>
                <li>002 <a href="/day-two">Calendário de humor 2019</a></li>
                <li>003 <a href="/day-three">Campo de fluxo de ruído duplo</a></li>
                <li>004 <a href="/day-four">Pegar o inseto</a></li>
            </Content>
        </Container>
    )
}

export default Home
