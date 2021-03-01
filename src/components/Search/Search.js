import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './search.css'


function Section3 () {
  const [error, setError] = useState(null);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  

  // esta función de efecto actua como componentDidMount
  useEffect((isLoaded) => {

    
    fetch("https://www.moogleapi.com/api/v1/characters")
      .then(res => res.json())
      .then(
        (characters) => {
          if (!isLoaded) {
            setAllItems(characters)
          }

          document.querySelector(".container-zone").classList.remove('section-two')

          setIsLoaded(true);
          setItemsToShow([]);
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

  function toogleFilter() {
    const divFilter = document.querySelector('.filter-section')
    divFilter.classList.toggle("active")
  }

  function toogleSearch() {
    const divSearch = document.querySelector('.seeker-section')
    divSearch.classList.toggle("active")
  }

  function searchHero() {
    const seeker = document.getElementById('heroSeeker');
    const word = seeker.value.toLowerCase(); // Convierto a lowerCase para poder hacer una busqueda case insensitive

    const found = allItems.filter(hero => {
      return hero.name.toLowerCase().includes(word) // Convierto a lowerCase para poder hacer una busqueda case insensitive
    });

    // Si hay algo escrito en el buscador, muestro los encontrados
    if (word !== '') {
      setItemsToShow(found);

      // Si no hay nada en el buscador, muestro todos
    } else {
      setItemsToShow([])
    }
  };

  function gameFilter() {
    // capturo los checkboxes
    const inputs = Array.from(document.getElementsByName("game-filter"))

    // filtro aquellos chequeados
    const selected = inputs.filter(input => {
      return input.checked
    })

    // obtengo un arreglo con los juegos chequeados
    const gamesFiltered = selected.map(el => {
      return el.getAttribute("data-game-name")
    })

    console.log(gamesFiltered);

    // Si hay algún checkbox marcado, dibujo los filtros
    if (gamesFiltered.length) {

      // corrección del ff4
      if (gamesFiltered.includes('Final Fantasy IV')) {
        gamesFiltered.push('Final Fantasy 04')
      }
      
      // Tomo todos los heroes y filtro los que pertenezcan a los juegos chequeados
      const itemsFiltered = allItems.filter(el => { 
        return gamesFiltered.includes(el.origin)
      })

      setItemsToShow(itemsFiltered);

    } else {
      // Si no hay checkbox marcados, dibujo todos
      setItemsToShow([])
    }
    console.log(allItems);
  };


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loader-container"><div className="loader"></div></div>;
  } else {
    return (
      <>
        <div style={{fontWeight:"bold", paddingLeft:"1rem"}}>*Need to fix filter and search combined</div>

        <div className="filter-section">
          <button className="feature-btn" onClick={toogleFilter}>
            <div className="section-title" >
              <i className="fas fa-caret-right"></i>
              <i className="fas fa-caret-down"></i> Filter
            </div>
          </button>
          <div className="game-filter-container" onChange={gameFilter} id="sagaFilter">
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy"/> FF I</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy II"/> FF II</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy III"/> FF III</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy IV"/> FF IV</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy V"/> FF V</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy VI"/> FF VI</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy VII"/> FF VII</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy VIII"/> FF VIII</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy IX"/> FF IX</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy X"/> FF X</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy X-2"/> FF X-2</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy XII"/> FF XII</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy XIII"/> FF XIII</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy XIII-2"/> FF XIII-2</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy XV"/> FF XV</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy BE"/> FF BE</span>
          </div>
        </div>

        <div className="seeker-section">
          <button className="feature-btn" onClick={toogleSearch}>
            <div className="section-title">
              <i className="fas fa-search"></i> Search
            </div>
          </button>
          <input className="hero-seeker" id="heroSeeker" onKeyUp={searchHero} placeholder="Type to search a Hero"/>
        </div>

        {itemsToShow.length? 
        <div className="results-counter"><b>Characters Found:</b> {itemsToShow.length} </div>
        :
        <></>
        }

        <div className="characters-container">
          {itemsToShow.map(item => {
            return (
              <Link to={`/details/${item.id}`} key={item.id} className="character-card shiny-test">
                <figure className="avatar">
                  <img src={item.pictures.length? item.pictures[0].url : "/final-fantasy-heroes/img/no-picture.png"} alt={item.name}/>
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
  
export default Section3;
    