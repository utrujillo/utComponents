import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PublicRouter from 'routers/PublicRouter'

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path='*'
                element={<PublicRouter />}
            />
        </Routes>
    )
}

export default AppRouter