import React from 'react';
import { Link } from 'react-router-dom';

function NotFound () {
  // Declara una nueva variable de estado, que llamaremos "count".

  return (
    <div style={{padding: "2rem"}}>
      <div style={{textAlign: "center"}}>Not Found...</div>
      <figure style={{maxWidth:"360px", margin:"0 auto"}}>
        <img src={`final-fantasy-heroes/img/tiduscrying.jpg`} alt="sad..." style={{width:"100%"}}/>
      </figure>
      <div style={{textAlign:"center"}}>
        <Link to="/final-fantasy-heroes" >Take me to the Homepage</Link>
      </div>
    </div>
  );
}
  
export default NotFound;
