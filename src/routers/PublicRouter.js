import React from 'react'
import { Routes, Route } from 'react-router-dom'

const PublicRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default PublicRouter