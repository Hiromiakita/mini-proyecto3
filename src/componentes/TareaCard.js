import React from 'react'

const TareaCard = (props) => {

    // Destructurar: Sacar las propiedades del objeto y guardarlas en variables
    const {titulo, descripcion, completada} = props;

    console.log('props', props);
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <a href="a" className="btn btn-primary">Completar</a>
            </div>
        </div>
    )
}

export default TareaCard;
