import React from 'react';

const ListarPlatillos = ({platillos}) => {
    return(
        <div>
            <h2> Lista de platillos </h2>
            <ul>
                {platillos.map((platillos, index) =>  (
                    <li key = {index}>
                        <h3>{platillos.nombre}</h3>
                        <p>Descripcion: {platillos.descripcion}</p>
                        <p>Categoria: {platillos.categoria}</p>
                        <p>valor: {platillos.valor_platillo}</p>
                    </li>

                ))}
            </ul>
        </div>
    );

};