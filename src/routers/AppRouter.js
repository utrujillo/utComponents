import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/public/Home'

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path='*'
                element={<Home />}
            />
        </Routes>
    )
}

export default AppRouter