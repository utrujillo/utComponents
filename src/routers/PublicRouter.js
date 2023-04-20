import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/public/Home'
import Buttons from 'pages/public/Buttons'
import UTNavbar from 'components/Widgets/UTNavbar'

const PublicRouter = () => {
    return(
        <>
            <UTNavbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/buttons' element={<Buttons />} />
            </Routes>
        </>
    )
}

export default PublicRouter