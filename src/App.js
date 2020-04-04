import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import Footer from './components/Footer';

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
      <Header titulo='Noticias' />
      <div className="container white s12">
        <Formulario setCategoria={setCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
