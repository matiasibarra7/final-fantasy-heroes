import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './section1.css'

function Section1 () {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  // esta función de efecto actua como componentDidMount
  useEffect(() => {
    fetch("https://www.moogleapi.com/api/v1/characters")
      .then(res => res.json())
      .then(
        (characters) => {
          setIsLoaded(true);
          setItems(characters);
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
        <div className="characters-container">
          {items.map(item => {
            return (
              <Link to={`/section-2/${item.id}`} key={item.id} className="character-card">
                <figure className="avatar">
                  {item.pictures.length?
                    <img src={item.pictures[0].url} alt={item.name}/> :
                    <div>Non Picture</div>
                  }
                </figure>
                <div className="name">
                  {item.name}
                </div>
              </Link>
            )
          })}
        </div>
      </>
    );
  }

}
  
export default Section1;
    