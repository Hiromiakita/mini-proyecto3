import React, { useEffect, useState } from 'react';
import TareaCard from '../componentes/TareaCard';

const Main = () => {

    // Traer tareas de firebase
    // 1. función que haga petición get a firebase DONE
    // 2. Mandar llamar función cuando el componente Main se monte DONE
    // 3. Crear variable de estado para guardar nuestrar tareas DONE
    // 4. Crear una card por cada tarea

    // Variables de estado
    const [tareas, setTareas] = useState([]);

    const getTareas = () => {
        console.log('Función GET');
        const URL = 'https://mini-proyecto3-m5-default-rtdb.firebaseio.com/tareas.json';

        fetch(URL)
            .then(body => body.json())
            .then(respuesta => {
                console.log(respuesta);
                setTareas(respuesta);
            });
    }


    // Función que elimina una tarea
    const deleteTarea = (id) => {
        const URL = `https://mini-proyecto3-m5-default-rtdb.firebaseio.com/tareas/${id}.json`;

        fetch(URL, { method: 'DELETE' })
            .then(body => body.json)
            .then(respuesta => console.log(respuesta));
    }

    // 1. Enviar como prop la función deleteTarea al componente TareaCard
    // 2. En TareaCard necesitamos recibir como prop la función deleteTarea
    // 3. Mandar llamar función en TareaCard cuando se haga click en el botón eliminar

    // El callback del useEffect se ejecutará antes de que el componente se monte
    useEffect(() => {
        getTareas();
    }, []);


    return (
        <div className="container">
            <h1>Soy la sección principal</h1>
            {/* <TareaCard 
                titulo="Titulo X" 
                descripcion="Descripción X" 
                completada={false}
            /> */}
            {/* ERROR */}
            {/* {
                tareas.map(tarea => <TareaCard/>)
            } */}
            <div className="d-flex flex-wrap">
                {
                    Object.keys(tareas).map(identificador => 
                        <TareaCard 
                            titulo = {tareas[identificador].titulo} 
                            descripcion = {tareas[identificador].descripcion}
                            completada = {tareas[identificador].completada}
                            key={identificador}/>)
                }
            </div>
        </div>
    )
}

export default Main;
