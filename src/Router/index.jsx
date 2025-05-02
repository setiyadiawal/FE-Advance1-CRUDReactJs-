import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import React from 'react'

import Home from '../Home'

const Router = () => {

    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>

            <Route path='/home' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Router