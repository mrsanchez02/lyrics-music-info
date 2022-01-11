import React, { Fragment,useState,useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import Error from './components/Error';
import axios from 'axios';



function App() {

  const [queryLyrics, setQueryLyrics]=useState({});
  const [lyrics,setLyrics]=useState('');
  const [info, setInfo] = useState('');
  const [error, setError] = useState(false);
  

  useEffect(()=>{
    if(Object.keys(queryLyrics).length===0)return;
    const { artista, cancion } = queryLyrics;
    
    const queryLyricsAPI = async () => {
      const URL = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const URL2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artista}`;

      const [lyrics,informacion]=await Promise.all([
        axios.get(URL),
        axios.get(URL2)
      ]).catch( error => {
        setError(true)
        setTimeout(()=>{
          setError(false)
        },2500)
      });

      setError(false);
      setLyrics(lyrics.data.lyrics);
      setInfo(informacion.data.artists[0]);

    }    
    queryLyricsAPI();

  },[queryLyrics])

  return (
    <Fragment>
      <Formulario 
      setQueryLyrics={setQueryLyrics}
      />
      <div className='container'>
      {error ? <Error mensaje="Artista o cancion no encontrados."/> : null}
        <div className='row mt-5'>
          <div className='col-md-6'>
            <Info
              info={info}
            />
          </div>
          <div className='col-md-6'>
            <Cancion 
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
