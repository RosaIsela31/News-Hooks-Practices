import React, { Fragment, useState, useEffect } from 'react';
import Header from './Header';
import Formulario from './Formulario'; 
import ListadoNoticias from './ListadoNoticias';

const AppContainer = () => {

  // Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guadarNoticias] = useState([]);

  // const APIKEY = '13da34c582b24cc19d5d50d7de01aa6c';
  useEffect(() => {
      const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=13da34c582b24cc19d5d50d7de01aa6c`;

        const respuesta = await fetch(url);
        const noticias = await respuesta.json(); 

        guadarNoticias(noticias.articles );
      }
      consultarAPI();
  }, [categoria ]);
   
  return ( 
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <Formulario 
          guardarCategoria={guardarCategoria} 
        /> 
        <ListadoNoticias 
            noticias={noticias}
        />
      </div>
    </Fragment>
   );
}
 
export default AppContainer;