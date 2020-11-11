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
      setItems(found);

      // Si no hay nada en el buscador, muestro todos
    } else {
      setItems(allItems)
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

      setItems(itemsFiltered);

    } else {
      // Si no hay checkbox marcados, dibujo todos
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

        <div className="filter-section">
          <div className="section-title" onClick={toogleFilter}>
            <i className="fas fa-caret-right"></i>
            <i className="fas fa-caret-down"></i> Filter
          </div>
          <div className="game-filter-container" onChange={gameFilter} id="sagaFilter">
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy"/> FF I</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy II"/> FF II</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy III"/> FF III</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy IV"/> FF IV</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 05"/> FF V</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 06"/> FF VI</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 07"/> FF VII</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 08"/> FF VIII</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 09"/> FF XI</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 10"/> FF X</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 10-2"/> FF X-2</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 12"/> FF XII</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 13"/> FF XIII</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 13-2"/> FF XIII-2</span>
            <span><input type="checkbox" name="game-filter" id="" data-game-name="Final Fantasy 15"/> FF XV</span>
          </div>
        </div>

        <div className="seeker-section">
          <div className="section-title" onClick={toogleSearch}><i className="fas fa-search"></i> Search <span>(Click to active the search mode)</span></div>
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
    