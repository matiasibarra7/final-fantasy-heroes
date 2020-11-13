import React, { useState, useEffect } from 'react';
import './section2.css'

function Section2 (props) {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  const [gameFound, setGame] = useState([]);

  const parseGameTitle = (title) => {
    switch (title) {
      case "Final Fantasy":
        return "Final Fantasy 01";
      case "Final Fantasy II":
        return "Final Fantasy 02";
      case "Final Fantasy III":
        return "Final Fantasy 03";
      case "Final Fantasy IV":
        return "Final Fantasy 04";
      case "Final Fantasy BE":
          return "Final Fantasy Brave Exvius";
      default:
        return title;
    }
  }


  // esta función de efecto actua como componentDidMount
  useEffect(() => {
    // llama al ep para encontrar el héroe
    fetch(`https://www.moogleapi.com/api/v1/characters/${props.match.params.id? props.match.params.id : 'random'}`)
      .then(res => res.json())
      .then(
        (character) => {
          setItem(props.match.params.id? character : [character]);

          fetch(`https://www.moogleapi.com/api/v1/games`)
            .then(res => res.json())
            .then(
              (games) => {
                
                let gameBelonging = props.match.params.id? character[0].origin : character.origin
                // console.log(gameBelonging);
                // console.log("parseado: " + parseGameTitle(gameBelonging));
                gameBelonging = parseGameTitle(gameBelonging)
                const gameFound = games.filter((el) => { return el.title === gameBelonging });
                // console.log(gameFound);
                
                document.querySelector(".container-zone").classList.add('section-two')

                setIsLoaded(true);
                setGame(gameFound);
              },

              (error) => {
                setIsLoaded(true);
                setError(error);
              }

            )

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
    return <div className="loader-container"><div className="loader"></div></div>;
  } else {
    return (
      <>
        <div className="character-container">
          <h2>Character's Details</h2>
          
            {props.match.params.id? '' : <div style={{fontWeight:"bold"}}>Random character. If you are looking for one in particular, select it from the character list :) </div>}

            {item.length?
              <>
                <figure className="portrait">
                  <img src={item[0].pictures.length? item[0].pictures[0].url : "../img/no-picture.png"} alt={item[0].pictures.length? item[0].name : "not-found"}/>
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
        <div className="game-container">
          {gameFound.length? 
            <>
              <h3>{gameFound[0].title}</h3>
              <figure style={{ width: "100", maxWidth: "480px"}}>
                  {
                    gameFound[0].title === "Final Fantasy Brave Exvius"? 
                      <img src="../img/FF-BE.png" alt="Final fantasy BE"/>
                      :
                      <img src={gameFound[0].picture? gameFound[0].picture : "../img/no-picture.png"} alt={gameFound[0].picture? gameFound[0].title : "not-found"} style={{width: "100%"}}/>

                  }
              </figure>
              <div><span className="attr-title">Platform:</span> {gameFound[0].platform}</div>
              <div><span className="attr-title">Description:</span> {gameFound[0].description}</div>
            </>
            :
            <div>Cargando...</div>
          }

        </div>
      </>
    );
  }

}


export default Section2;
