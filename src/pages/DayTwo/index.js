import React, { useState, useEffect } from 'react'
import { FaRegLaugh, FaRegSmile, FaRegMeh, FaRegFrown, FaRegSadTear } from 'react-icons/fa'
import { Container, Title } from '../../styles'
import { Calendario, BotoesHumor, Dia } from './styles'

function DayTwo() {


    const [cores, setCores] = useState([]);


    const year = 2019;
    const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];


    const gerarId = () => '_' + Math.random().toString(36).substr(2, 9);



    function obterCalendarioDoMes(mes, ano) {

        const comeco = new Date(ano, mes, 1);
        const fim = new Date(ano, mes + 1, 0);
        const datas = [];

        for (let i = 0; comeco <= fim; comeco.setDate(comeco.getDate() + 1), i++)
            datas.push(new Date(comeco));

        let
            diasDaSemana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            indiceDias = 0,
            diasDoMes = []


        for (let index = 0; index <= 4; index++) {

            diasDaSemana.forEach(x => {

                const corrente = datas[indiceDias];
                let diaCorrente = null;

                if (corrente !== undefined && corrente.toString().startsWith(x)) {
                    diaCorrente = corrente.getDate();
                    indiceDias++;
                }

                diasDoMes.push({
                    id: gerarId(),
                    dia: diaCorrente,
                    data: corrente,
                    cor: ''
                });

            })
        }

        //setCores(x => [...x, diasDoMes]);

        return diasDoMes;

    }

    function obterCalendarioAno(ano) {

        for (let indexMes = 0; indexMes <= 11; indexMes++) {
            const mes = obterCalendarioDoMes(indexMes, ano);
            setCores(x => [...x, mes]);
        }

    }

    useEffect(() => {

        obterCalendarioAno(year);


    }, [])

    function obterSemana(indexSemana, indexMes) {

        debugger;



        const
            mes = cores[indexMes],
            inicio = (indexSemana * 7),
            fim = inicio + 7;

        const semana = mes.slice(inicio, fim)

        return semana;

    }

    //obterSemana(4, obterCalendarioDoMes(8, year))

    function handlerClickCor(id) {

        const item = cores
        [0]
            .findIndex(x => x.id === id);

        console.log("fui clicado", id);
        console.log('item', item);





        setCores(cores);


    }



    function handleClick() {

        console.log('clicado')
    }


    if (!cores || cores.length === 0) return null;


    return (
        <Container>

            <Title>

                <h2> Calendário de humor 2019 </h2>
                <p>pinte a cada dia dependendo de como seu humor estava</p>
                <p>Selecione o humor:</p>

                <BotoesHumor>
                    <button onClick={handleClick}><FaRegLaugh size={24} /></button>
                    <button onClick={handleClick}><FaRegSmile size={24} /></button>
                    <button onClick={handleClick}><FaRegMeh size={24} /></button>
                    <button onClick={handleClick}><FaRegFrown size={24} /></button>
                    <button onClick={handleClick}><FaRegSadTear size={24} /></button>

                </BotoesHumor>
            </Title>
            <Calendario>
                {months.map((month, indexMes) => (
                    <div key={indexMes}>
                        <h3>{month}</h3>

                        <table>

                            <thead>
                                <tr>
                                    {week.map((day) =>
                                        <th key={day}>{day}</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    {obterSemana(0, indexMes).map(semana =>

                                        <td key={semana.id} onClick={() => handlerClickCor(semana.id)} >
                                            {semana.dia && <Dia cor={semana.cor} >{semana.dia}</Dia>}
                                        </td>
                                    )}
                                </tr>


                                <tr>
                                    {obterSemana(1, indexMes).map(semana =>

                                        <td key={semana.id} onClick={() => handlerClickCor(semana.id)} >
                                            {semana.dia && <Dia cor={semana.cor} >{semana.dia}</Dia>}
                                        </td>
                                    )}
                                </tr>

                                <tr>
                                    {obterSemana(2, indexMes).map(semana =>

                                        <td key={semana.id} onClick={() => handlerClickCor(semana.id)} >
                                            {semana.dia && <Dia cor={semana.cor} >{semana.dia}</Dia>}
                                        </td>
                                    )}
                                </tr>


                                <tr>
                                    {obterSemana(3, indexMes).map(semana =>

                                        <td key={semana.id} onClick={() => handlerClickCor(semana.id)} >
                                            {semana.dia && <Dia cor={semana.cor} >{semana.dia}</Dia>}
                                        </td>
                                    )}
                                </tr>




                            </tbody>

                        </table>
                    </div>
                ))}


            </Calendario>
        </Container >
    )
}

export default DayTwo
