import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const DisplayPlanets = () => {
    const [data, setData] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()
    // let kenobi = true

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response)
                setData(response.data)
                
            })
            .catch(err => {
                console.log(err)
                // kenobi = false (Wanted to flip a boolean on errors and use ternary to display an image of Kenobi )
                navigate('/error')
            })

    }, [id])
    console.log()

    return (

        <div>
            {data ?
                <div>
                    <h1>Planet: {data.name}</h1>
                    <h1>Climate: {data.climate}</h1>
                    <h1>Terrain: {data.terrain}</h1>
                    <h1>Surface Water: {data.surface_water}</h1>
                    <h1>Population: {data.population}</h1>
                </div>
                : <h1>Loading...</h1>
            }
        </div>
    )
}

export default DisplayPlanets