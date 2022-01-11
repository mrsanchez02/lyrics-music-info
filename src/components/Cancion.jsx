import React, { Fragment } from 'react'

const Cancion = ({lyrics}) => {
    
    if(lyrics.length===0)return null;

    return (
        <Fragment>
            <h2>Letra Cancion</h2>
            <p className='letra'>{lyrics}</p>
        </Fragment>
    )}

export default Cancion
