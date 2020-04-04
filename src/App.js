import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  

  const [categoria, setCategoria] = useState('');

  const [noticias, setNoticias] = useState([]);

  useEffect(()=>{

    const buscarNoticiaAPI = async () =>{
        const url = `https://newsapi.org/v2/top-headlines?category=${categoria}&country=co&apiKey=176cef8317e94f059318b3ee7e643ac6`;
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();
        setNoticias(noticias.articles);
    }

    buscarNoticiaAPI();
  },[categoria]);
  return (
    <Fragment>
      <Header titulo='Buscador de noticias' />
      <div className="container white">
        <Formulario setCategoria={setCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>

    </Fragment>
  );
}

export default App;
