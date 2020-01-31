import React from 'react';
import style from './Formulario.module.css';
import useSelect from '../hooks/useSelect'; 

const Formulario = ({guardarCategoria }) => {

  const OPCIONES = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Negocios'},
    {value: 'entertainment', label: 'Entretenimiento'},
    {value: 'health', label: 'Salud'},
    {value: 'science', label: 'Ciencia'},
    {value: 'sports', label: 'Deportes'}, 
    {value: 'technology', label: 'Tecnología'}

  ]
  
  // utilizar custom hook
  const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

  // Submit al form, pasar categoria a app.js
  const buscarNoticias = e => {
    e.preventDefault();

    guardarCategoria(categoria)
  }

  return ( 
    <div className={`${style.buscador} row`}>
      <div className='col s12 m8 offset-m2'>
        <form
          onSubmit={buscarNoticias }
        >
          <h2 className={style.heading}>Encuentra noticias por Categoría</h2>

          <SelectNoticias />


          <div className='input-field col s12'>
            <input 
                type='submit' 
                className={`${style.btn_block} btn-large amber darken-2`}
                value='Buscar'
            />
          </div>
        </form>
      </div>
    </div>
   );
}
 
export default Formulario;