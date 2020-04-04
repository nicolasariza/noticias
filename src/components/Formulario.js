import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        {value: 'general', label:'General'},
        {value: 'technology', label:'Tecnología'},
        {value: 'sports', label:'Deportes'},
        {value: 'health', label:'Salud'},
        {value: 'business', label:'Negocios'}
    ]

    // utilizar custom hooks
    const [ categoria, SelectNoticias ] = useSelect('general',OPCIONES);

    // Funcion de submit para pasar el state a App.js

    const handleSubmit = e => {
        e.preventDefault();

        setCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>

     );
}
 
export default Formulario;