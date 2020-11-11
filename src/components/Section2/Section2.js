import React, { useState, useEffect } from 'react';
import './section2.css'

function Section2 (props) {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  // esta función de efecto actua como componentDidMount
  useEffect(() => {
    fetch(`https://www.moogleapi.com/api/v1/characters/${props.match.params.id? props.match.params.id : 'random'}`)
      .then(res => res.json())
      .then(
        (character) => {
          setIsLoaded(true);
          setItem(props.match.params.id? character : [character]);
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []) //Este array hace que no se ejecute eternamente el pedido ajax, averiguar

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loader"></div>;
  } else {
    return (
      <>
        <div className="character-container">
          <h2>Character's Details</h2>
          
            {props.match.params.id? '' : <div style={{fontWeight:"bold"}}>Random character. If you are looking for one in particular, select it from the character list :) </div>}

            {item.length?
              <>
                <figure className="portrait">
                  <img src={item[0].pictures[0].url} alt=""/>
                </figure>
                <div className="character-details">
                  <div><span className="attr-title">Name:</span> {item[0].name}</div>
                  <div><span className="attr-title">Description:</span> {item[0].description? item[0].description : 'None'}</div>
                  <div><span className="attr-title">Gender:</span> {item[0].gender}</div>
                  <div><span className="attr-title">Job:</span> {item[0].job}</div>
                  <div><span className="attr-title">Origin:</span> {item[0].origin}</div>
                </div>
              </>
            : <div>Cargando...</div>
            }
        </div>
      </>
    );
  }

}


export default Section2;
