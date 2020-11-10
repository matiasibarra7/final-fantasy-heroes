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
    const seeker = document.getElementById('heroSeeker');
    const word = seeker.value.toLowerCase(); // Convierto a lowerCase para poder hacer una busqueda case insensitive

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

  function gameFilter() {
    const inputs = Array.from(document.getElementById("sagaFilter").children)
    const selected = inputs.filter(input => {
      return input.checked
    })
    const gamesFiltered = selected.map(el => {
      return el.getAttribute("data-game-name")
    })
    //console.log("gamesFiltered")
    //console.log(gamesFiltered)

    //corrección del ff4
    if (gamesFiltered.includes('Final Fantasy IV')) {
      gamesFiltered.push('Final Fantasy 04')
    }
    
    let itemsFiltered = allItems.filter(el => { 
      return gamesFiltered.includes(el.origin)
    })
    //console.log("itemsFiltered");
    //console.log(itemsFiltered);
    if (itemsFiltered.length) {
      setItems(itemsFiltered);

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
        <div style={{fontWeight:"bold", paddingLeft:"1rem"}}>*Need to fix filter and search combined</div>
        <div style={{width: '100%', padding: '1rem'}}>
          <h3>Filter</h3>
          <div onChange={gameFilter} id="sagaFilter" style={{display: "flex", justifyContent:"space-between", flexWrap:"wrap"}}>
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy"/> FF I
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy II"/> FF II
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy III"/> FF III
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy IV"/> FF IV
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 05"/> FF V
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 06"/> FF VI
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 07"/> FF VII
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 08"/> FF VIII
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 09"/> FF XI
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 10"/> FF X
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 10-2"/> FF X-2
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 12"/> FF XII
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 13"/> FF XIII
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 13-2"/> FF XIII-2
            <input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 15"/> FF XV
          </div>
        </div>
        <div style={{width: '100%', padding: '1rem'}}>
          <h3>Search</h3>
          <input className="hero-seeker" id="heroSeeker" onKeyUp={searchHero} placeholder="Type to search a Hero"/>
        </div>
        <div className="characters-container">
          {itemsToShow.map(item => {
            return (
              <Link to={`/nahuel-react-ff-api/section-2/${item.id}`} key={item.id} className="character-card">
                <figure className="avatar">
                  {item.pictures.length?
                    <img src={item.pictures[0].url} alt={item.name}/> :
                    <div>Non Picture</div>
                  }
                </figure>
                <div className="name">
                  {item.name}
                </div>
                <div className="saga">
                  {item.origin}
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
    