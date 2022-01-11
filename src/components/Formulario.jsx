import React,{ useState } from 'react'
import Error from './Error';

const Formulario = ({setQueryLyrics}) => {

    const [error,setError]= useState(false);
    const [query,setQuery]= useState({
        artista:'',
        cancion:''
    })

    // Destructuring...
    const {artista,cancion}=query;

    // Funcion a cada Input

    const handleChange = e => {
        setQuery({
            ...query,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        // validar campos
        if(cancion.trim()===''||artista.trim()===''){
            setError(true)
            return
        }
        setError(false)

        // Enviar busqueda a la app.
        setQueryLyrics(query);

        // Limpiar campos.
        setQuery({
            artista:'',
            cancion:''
        });

    }

    return (
        <div className='bg-info'>
            <div className="container">
                    {error ? <Error mensaje="Todos los campos son obligatorios."/> : null}
                <div className="row">
                    <form 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={handleSubmit}
                    >
                        <h1 className='display-4 text-center'>Buscador Letras Canciones</h1>
                        <hr/>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className='form-control' 
                                        name="artista" 
                                        placeholder='Nombre artista' 
                                        onChange={handleChange}
                                        value={artista}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Cancion</label>
                                    <input 
                                        type="text" 
                                        className='form-control' 
                                        name="cancion" 
                                        placeholder='Nombre cancion' 
                                        onChange={handleChange}
                                        value={cancion}
                                    />
                                </div>
                            </div>
                        </div>
                        <button 
                            type="submit"
                            className='btn btn-primary float-right'
                        >Buscar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario
