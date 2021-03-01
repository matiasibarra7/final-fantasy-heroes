import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import Banner from "../Banner/Banner"

function Home () {
  const [error, setError] = useState(null);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  let [page, setPage] = useState(1);
  

  // esta función de efecto actua como componentDidMount
  useEffect((isLoaded) => {
    fetch("https://www.moogleapi.com/api/v1/characters")
      .then(res => res.json())
      .then(
        (characters) => {
          console.log(characters)
          if (!isLoaded) {
            setAllItems(characters)
          }

          document.querySelector(".container-zone").classList.remove('section-two')

          setIsLoaded(true);
          setItemsToShow(characters.slice(0,page * 28));
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

  function otherPage() {
    setPage(++page)
    setItemsToShow(allItems.slice(0,page * 28))
    console.log("el numero de la paginas ", page)
    console.log(allItems.slice(0,20*page))
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loader-container"><div className="loader"></div></div>;
  } else {
    return (
      <>
        < Banner />

        <h2 style={{textAlign:"center"}}>List of Character</h2>

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


          <button className="load-more" onClick={otherPage}>
            <div className="section-title" >
              Load More
            </div>
          </button>
        </div>
      </>
    );
  }

}
  
export default Home;
    