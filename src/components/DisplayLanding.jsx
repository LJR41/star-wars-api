import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const DisplayLanding = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        type: '',
        id: 0,
    })


    const changeValue = (e) => {
        const {name,value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${formData.type}/${formData.id}`)

    
    }
    return (
        <div>
            <h1>The Landing Page</h1>
            <form onSubmit={handleSubmit}>
                <select name="type" id="" onChange={changeValue}>
                    <option hidden value="">Please Select One</option>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                </select>
                <input type="number" name="id" onChange={changeValue}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default DisplayLanding