import React from 'react'
import Calcular from '../calcular'

const Botao = () => {
    return (
        <React.Fragment>
        <div className="row">
            <div className="col-sm-8"></div>
            <div className="col-sm-4" id="calcular">
                <button onClick={Calcular} type="button" className="btn btn-primary">Calcular</button>
            </div>
        </div>
        <hr className="bg-light border-2 border-top"/>
        </React.Fragment>
    )
}

export default Botao