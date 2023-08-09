import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const DisplayPeople = () => {
    const [data , setData] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    // let kenobi = true
    
    
    useEffect (() =>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response =>{
            console.log(response)
            setData(response.data)
        })
        .catch(err=>{
            console.log(err)
            // kenobi = false (Wanted to flip a boolean on errors and use ternary to display an image of Kenobi )
            navigate('/error')
            
        })

    },[id])

    return (
        <div>
            {data?
            <div>
                <h1>Name: {data.name}</h1>
                <h1>Height: {data.height}</h1>
                <h1>Hair Color: {data.hair_color}</h1>
                <h1>Skin Color: {data.skin_color}</h1>
            </div>
            : <h1>Loading...</h1>
            }
        </div>
    )
}

export default DisplayPeople