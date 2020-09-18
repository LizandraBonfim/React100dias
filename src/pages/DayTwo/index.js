import React, { useState } from 'react'
import { Container } from '../../styles'
import { Calendario, DiaSemana } from './styles'

function DayTwo() {

    // --mood-color-1: #2d6b5f;
    // --mood-color-2: #72e3a6;
    // --mood-color-3: #dff4c7;
    // --mood-color-4: #edbf98;
    // --mood-color-5: #ea3d36;

    const year = 2019;
    const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    const getAllDays = year => {
        // First day of the year - 1st January
        const PrimeiroDiaDoAno = new Date(`January 1 ${year}`);
        // Last day of the year - 31th December - used to stop adding days to the array
        const UltimoDiaDoAno = new Date(`December 31 ${year}`);

        // Add first day
        const dias = [PrimeiroDiaDoAno];

        // Used to keep track of the day
        let UltimoDiaDoArray = PrimeiroDiaDoAno;

        // Loop while there are new days to be added in the current year
        while (UltimoDiaDoArray.getTime() !== UltimoDiaDoAno.getTime()) {
            dias.push(addDays(UltimoDiaDoArray, 1));
            UltimoDiaDoArray = dias[dias.length - 1];
        }

        return dias;
    };

    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    const dates = getAllDays(year);

    function obterSemanaDoMes(numeroDoMes, numeroDaSemana) {

        const mes = dates.filter(x => x.getMonth() === numeroDoMes);
        let semanasDoMes = [];

        switch (numeroDaSemana) {
            case 0:
                semanasDoMes = mes.slice(0, 7);
                break;

            case 1:
                semanasDoMes = mes.slice(8, 15);
                break;

            case 2:
                semanasDoMes = mes.slice(16, 23);
                break;

            case 3:
                semanasDoMes = mes.slice(24);
                break;

        }

        return semanasDoMes;


    }

    function montarSemanaDoCalendario(numeroDoMes) {

        let semanaCalendario = [];
        const mes = dates.filter(x => x.getMonth() === numeroDoMes);

        const dias = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sun'];
        mes.forEach(dia => {

        })


        return [
            semana[0].toString().startsWith("Sun") && semana[0].getDay(),
            semana[1].toString().startsWith("Mon") && semana[1].getDay(),
            semana[2].toString().startsWith("Tue") && semana[2].getDay(),
            semana[3].toString().startsWith("Wed") && semana[3].getDay(),
            semana[4].toString().startsWith("Thu") && semana[4].getDay(),
            semana[5].toString().startsWith("Fri") && semana[5].getDay(),
            semana[6].toString().startsWith("Sun") && semana[6].getDay(),
        ]
    }





    console.log('semnasd do mes de janeiro', obterSemanaDoMes(0, 0));
    console.log('semana', montarSemanaDoCalendario(obterSemanaDoMes(0, 0)))


    //console.log('dias', dates)

    return (
        <Container>
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
                                {obterSemanaDoMes(indexMes, 0).map((dia, index) =>

                                    <tr key={index}>



                                    </tr>

                                )}

                            </tbody>

                        </table>
                    </div>
                ))}


            </Calendario>
        </Container >
    )
}

export default DayTwo
