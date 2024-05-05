"use client"

import React, { useState, useEffect } from 'react';
import './component.css';

export default function HandleTwoStates() {
  // estados
  const [datos, setData] = useState([]); // datos de la API
  const [error, setError] = useState(null); // error al obtener los datos
  // estados para la paginacion
  const [currentPage, setCurrentPage] = useState(1); // pagina actual
  const itemsPerPage = 10; // items por pagina

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${itemsPerPage}`) //  obtengo datos de la API por pagina
      .then(response => response.json()) // convierto respuesta en JSON
      .then(jsonData => { // datos obtenidos de respuesta
        setData(jsonData); // cargo los datos
        setError(null); // limpio el error
      })
      .catch(error => {
        setError(error.message); // si hay error, lanzo excepcion
      });
  }, [currentPage]); // ejecuto cuando cambia la pagina

/*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${itemsPerPage}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }

        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [currentPage]);
*/
  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  if (error) return <p>{error}</p>;

  return (
    <div className="container">
        <ul>
          <h1>useEffect datos API</h1>
          {datos.map((dato) => (
            <li key={dato.id}>
              {dato.title}
            </li>
          ))}
        </ul>
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
          <button onClick={nextPage} disabled={datos.length < itemsPerPage}>Siguiente</button>
        </div>
    </div>
  );
}
