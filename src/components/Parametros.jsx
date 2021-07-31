import React from 'react'

const Parametros = () => {
    return (
        <React.Fragment>
        <div className="row g-3">

            <div className="col-sm-4">
                <input id="operador" type="text" className="form-control" placeholder="Digite um número" aria-label="Digite um número"/>
            </div>

            <div className="col-sm-4">
                <select id="operacao" className="form-select" aria-label="Example select with button addon">
                    <option defaultValue>--Selecione uma operação</option>
                    <option value="1">Adição</option>
                    <option value="2">Subtração</option>
                    <option value="3">Multiplicação</option>
                    <option value="4">Divisão</option>
                </select>
            </div>

            <div className="col-sm-4">
                <input id="operando" type="text" className="form-control" placeholder="Digite um número" aria-label="Digite um número"/>
            </div>

        </div>
        <hr className="bg-light border-2 border-top"/>
        </React.Fragment>
    )
}

export default Parametros