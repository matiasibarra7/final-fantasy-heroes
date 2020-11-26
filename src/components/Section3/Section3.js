import React, { useState } from 'react';

function Section3 () {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  return (
    <>
    <div style={{textAlign: "center"}}>Under construction...</div>
    <figure style={{maxWidth:"360px", margin:"0 auto"}}>
      <img src="/final-fantasy-heroes/img/UC-Sign.png" alt="Under construction..." style={{width:"100%"}}/>
    </figure>
    <div style={{display: "none"}}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
    </>
  );
}
  
export default Section3;
