import React from 'react'
import { useNavigate } from 'react-router-dom'

const DisplayError = () => {
    const navigate = useNavigate()
    const sendHome = (e) => {
        navigate('/')
    }
    return (
        <div>

            <div><img src="https://media.tenor.com/TlfAvuz0tLMAAAAC/obi-wan-kenobi-these-are-not-the-droids.gif" alt="These aren't the droids youre looking for -Obi wan Kenobi" /></div>
            <button onClick={sendHome}>Go Home</button>
        </div>
    )
}

export default DisplayError