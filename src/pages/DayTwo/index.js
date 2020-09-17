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

    return (
        <Container>
            <Calendario>
                {months.map((month, index) => (
                    <div>
                        <h3>{month}</h3>

                        <table>

                            <tr>
                                {week.map((day, idx) => <th>{day}</th>)}
                            </tr>
                            <tbody>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tbody>

                        </table>
                    </div>
                ))}


            </Calendario>
        </Container >
    )
}

export default DayTwo
