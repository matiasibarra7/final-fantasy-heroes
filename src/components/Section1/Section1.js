import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './section1.css'

function Section1 () {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemsToShow, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  



  // esta función de efecto actua como componentDidMount
  useEffect(() => {
    fetch("https://www.moogleapi.com/api/v1/characters")
      .then(res => res.json())
      .then(
        (characters) => {
          if (!isLoaded) {
            setAllItems(characters)
          }
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
  }, []);

  function searchHero() {
    const searcher = document.getElementById('searcherHeroes');
    const word = searcher.value.toLowerCase(); // Convierto a lowerCase para poder hacer una busqueda case insensitive

    const found = allItems.filter(hero => {
      return hero.name.toLowerCase().includes(word) // Convierto a lowerCase para poder hacer una busqueda case insensitive
    });

    // Si hay algo escrito en el buscador, muestro los encontrados
    if (word !== '') {
      setItems(found);

      // Si no hay nada en el buscador, muestro todos
    } else {
      setItems(allItems)
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loader"></div>;
  } else {
    return (
      <>
        <div style={{width: '100%', padding: '1rem'}}>
          <h3>Buscador</h3>
          <input className="searcher-heroes" id="searcherHeroes" onKeyUp={searchHero}/>
        </div>
        <div className="characters-container">
          {itemsToShow.map(item => {
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
    