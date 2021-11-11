import React from 'react'
import './../resources/styles/header.css'

const Header = () => {
    return (
        <>        
            <div className='parallax'>
                <h1
                style={{padding: '10px', backgroundColor: 'black'}} 
                className='h1 text-center text-white my-2'>
                    Rick and Morty Web App
                </h1>
            </div>


        </>
    )
}

export default Header
