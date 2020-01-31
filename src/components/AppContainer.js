import React, { Fragment, useState } from 'react';
import Header from './Header';
import Formulario from './Formulario'; 

const AppContainer = () => {

  // Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
   
  return ( 
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <Formulario 
          guardarCategoria={guardarCategoria} 
        /> 
      </div>
    </Fragment>
   );
}
 
export default AppContainer;