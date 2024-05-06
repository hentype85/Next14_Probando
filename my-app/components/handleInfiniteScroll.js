"use client"

import React, { useState, useEffect } from 'react';
import './component.css';

export default function HandleInfiniteScroll() {
    const [datos, setData] = useState([]); // datos de la API
    const [error, setError] = useState(null); // error al obtener los datos
    const [currentPage, setCurrentPage] = useState(1); // pagina actual
    const [loading, setLoading] = useState(false); // estado de carga

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}`)
          .then(response => response.json())
          .then(jsonData => {
            setData(prevData => [...prevData, ...jsonData]); // combino los datos previos y nuevos en un solo array
            setError(null);
            setLoading(false);
          })
          .catch(error => {
            setError(error.message);
            setLoading(false);
          });
    }, [currentPage]);

    useEffect(() => {
        function handleScroll() {
            // si el scroll llega al final de la pagina
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                setCurrentPage(prevPage => prevPage + 1); // cargo la siguiente pagina
            }
        }
        window.addEventListener('scroll', handleScroll);
        return (() => {
            window.removeEventListener('scroll', handleScroll)
        });
    }, []);

    return (
        <>
            <div className='center container'>
                <h1>Infinite Scroll</h1>
            </div>
            <div className="container">
                <ul>
                    {datos.map(dato => (
                        <li key={dato.id}>{dato.title}</li>
                    ))}
                </ul>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
            </div>
        </>
    );
}
