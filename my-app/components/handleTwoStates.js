"use client"

import React, { useState, useEffect } from 'react';
import './handleTwostates.css';

export default function HandleTwoStates() {
  const [datos, setData] = useState(null); // datos de la API
  const [error, setError] = useState(null); // error al obtener los datos

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // obtengo datos de la API
        if (!response.ok) {
          throw new Error('Error al obtener los datos'); // si hay error, lanzo excepcion
        }

        const jsonData = await response.json(); // convierto respuesta en JSON

        setData(jsonData); // cargo los datos
        setError(null); // limpio el error

      } catch (error) {
        setError(error.message);
      }
    };

    fetchData(); // ejecuto funcion
  }, []);

  if (!datos && !error) return <p>Cargando datos...</p>;
  else if (!datos) return <p>{error}</p>;

  return (
    <div className="container">
        <ul>
          <h1>Lista de datos API</h1>
          {error && <li>{error}</li>}

          {datos && datos.map((dato) => (
            <li key={dato.id}>
              {dato.title}
            </li>
          ))}

        </ul>
    </div>
  );
}
