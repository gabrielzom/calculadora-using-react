import React from 'react'

import Botao from './components/Botao'
import Navbar from './components/Navbar'
import Parametros from './components/Parametros'
import Resultado from './components/Resultado'

const App = () => {
    return (
        <div className="container">
            <Navbar/>
            <Parametros/>
            <Botao/>
            <Resultado/>
        </div>        
    )
}

export default App