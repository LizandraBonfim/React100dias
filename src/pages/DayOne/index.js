import React, { useState } from 'react'
import { GiHamburger } from 'react-icons/gi'
import { Container, Title } from '../../styles'
import { Content, Button } from './styles'

function DayOne() {

    const [data, setData] = useState([]);
    const [ingredientes, setIngredientes] = useState([]);

    function handleClick() {
        setIngredientes([])

        let nomes;

        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(e => e.json())
            .then(res => {
                setData(res.meals)

                const dados = res.meals[0]
                nomes = Object.keys(dados)
                var ingredientes = nomes.filter(x => x.startsWith("strIngredient"))

                for (var i = 1; i <= ingredientes.length; i++) {
                    const ingre = dados[`strIngredient${i}`];
                    const measure = dados[`strMeasure${i}`];

                    if (!ingre)
                        return;

                    const ingrediente = `${ingre} - ${measure}`
                    setIngredientes(e => [...e, ingrediente])

                }

            })



    }

    return (
        <Container>

            <Title>

                <h2>Com fome?</h2>
                <p>
                    Obtenha uma refeição aleatória clicando abaixo
                </p>
                <Button onClick={handleClick}>
                    Clique !
                    <GiHamburger />
                </Button>
            </Title>


            {data && data.map(item => (

                <section key={item.idMeal}>

                    <Content>

                        <div>
                            <img src={item.strMealThumb} alt="Skillet Apple Pork Chops with Roasted Sweet Potatoes  Zucchini" />

                            <p><strong>Category: </strong>{item.strCategory}</p>
                            <p><strong>Area: </strong>{item.strArea}</p>
                            {item.strTags && <p><strong>Tags: </strong>{item.strTags}</p>}

                            <p>Ingredients:</p>

                            <ul>
                                {ingredientes && ingredientes.map((ingrediente, index) => (

                                    <li key={index} >{ingrediente}</li>
                                ))}

                            </ul>

                        </div>

                        <div>
                            <h1>{item.strMeal}</h1>

                            <p>{item.strInstructions}</p>
                        </div>

                    </Content>


                    {item.strYoutube
                        ?
                        <>
                            <h2>Video </h2>
                            <iframe width="956" height="561"
                                src={`https://www.youtube.com/embed/${item.strYoutube.slice(-11)}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </>

                        : ''
                    }
                </section>

            ))
            }

        </Container>
    )
}

export default DayOne
