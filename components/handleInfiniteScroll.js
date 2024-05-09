"use client"

import React, { useState, useEffect } from 'react';
import './handleStates.css';

export default function HandleInfiniteScroll() {
    const [datos, setData] = useState([]); // datos de la API
    const [error, setError] = useState(null); // error al obtener los datos
    const [currentPage, setCurrentPage] = useState(1); // pagina actual

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}`)
          .then(response => response.json())
          .then(jsonData => {
            if (datos.length === 0) { // si no hay datos previos se asigna jsonData a datos
                setData(jsonData);
            } else {
                setData(prevData => [...prevData, ...jsonData]); // combino los datos previos y nuevos en un solo array
            }
            setError(null);
          })
          .catch(error => {
            setError(error.message);
          });
    }, [currentPage]);

    useEffect(() => {
        function handleScroll() {
            // posicion del scroll
            const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            // posicion altura de la ventana
            const windowHeight = window.innerHeight;

            // calcular posicion en mitad de la pagina
            const halfPageHeight = document.documentElement.scrollHeight / 2;

            // si el scroll esta en la mitad de la pagina
            if (scrollPosition + windowHeight >= halfPageHeight) {
                setCurrentPage(prevPage => prevPage + 1); // cargar siguiente
            }
        }
        window.addEventListener('scroll', handleScroll);
        return (() => {
            window.removeEventListener('scroll', handleScroll)
        });

    }, []);

    return (
        <>
            <div className='center'>
                <h1>Infinite Scroll</h1>
            </div>

            <div className="container">
                <ul>
                    {datos.map(dato => (
                        <li key={dato.id}>{dato.id} - {dato.title}</li>
                    ))}
                </ul>
                {error && <div>Error: {error}</div>}
            </div>

        </>
    );
}
