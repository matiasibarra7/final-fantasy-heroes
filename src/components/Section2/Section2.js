import React, { useState, useEffect } from 'react';

function Section2 (props) {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  // esta función de efecto actua como componentDidMount
  useEffect(() => {
    fetch(`https://www.moogleapi.com/api/v1/characters/${props.id}`)
      .then(res => res.json())
      .then(
        (character) => {
          setIsLoaded(true);
          setItem(character);
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="character-container">
          <h2>Character's Details</h2>
            {item.length?
              <>
                <figure>
                  <img src={item[0].pictures[0].url} alt=""/>
                </figure>
                <div>Name: {item[0].name}</div>
                <div>Description: {item[0].description}</div>
                <div>Gender: {item[0].gender}</div>
                <div>Job: {item[0].job}</div>
                <div>Origin: {item[0].origin}</div>
              </>
            : <div>Cargando...</div>
            }
        </div>
      </>
    );
  }

}

Section2.defaultProps = {
  id: '7e413cac-ab41-4eea-0f6c-08d6afcab3e2'
}
  
export default Section2;
