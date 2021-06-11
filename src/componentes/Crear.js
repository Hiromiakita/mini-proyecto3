import React from 'react'

const Crear = () => {
    return (
        <form>
            <div className="mb-3">
                <label for="inputTitulo" className="form-label">Titulo Tarea</label>
                <input type="text" className="form-control" id="inputTitulo" aria-describedby="titulo"/>
            </div>
            <div className="mb-3">
                <label for="inputDescripcion" className="form-label">Descripción Tarea</label>
                <input type="text" className="form-control" id="inputDescripcion" />
            </div>
            <button type="submit" className="btn btn-primary">Crear tarea</button>
        </form>
    )
}

export default Crear
