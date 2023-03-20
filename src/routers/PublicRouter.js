import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/public/Home'
import Buttons from 'pages/public/Buttons'

const PublicRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Buttons />} />
            <Route path='/buttons' element={<Home />} />
        </Routes>
    )
}

export default PublicRouter