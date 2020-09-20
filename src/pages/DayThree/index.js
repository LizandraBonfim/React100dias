import React, { useState, useRef } from 'react'
import { Container } from '../../styles'


function DayThree() {

    const numeroDeParticulas = 2500
    const [particulas, setParticulas] = useState()
    const [field, setField] = useState()
    const size = 20
    const purple = 'rgba(140, 82, 255, 1)';

    const canvasRef = useRef(null)
    const canvas = canvasRef.current



    return (
        <Container>
            <div>
                < canvas ref={canvasRef} />
            </div>

        </Container >
    )
}

export default DayThree
