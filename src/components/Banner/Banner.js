import React, { useEffect } from 'react';
import './banner.css'

function Banner() {
  //const [actualImg, setActualImg] = useState(1);
  
  // esta función de efecto actua como componentDidMount
  useEffect(() => {
    let cont = 1
    function rotateImg() {
      // console.log("actualImg ", actualImg)
      // console.log("cont: ", cont)
  
      const list = document.querySelectorAll(".banner-element")
      list.forEach(el => {
        el.classList.remove("active")
      })
      //console.log("list.length: ", list.length);
  
      
      cont++
      if (cont > list.length) {cont = 1}
      if (list.length) {
        list[cont - 1].classList.add("active")
  
        setTimeout(rotateImg, 5000)
      }
  
  
      /* setActualImg(actualImg + 1)
      if (actualImg > list.length) {setActualImg(1)}
      list[actualImg - 1].classList.add("active") */
  
    } ;

    //console.log("in")
    setTimeout(rotateImg, 5000) // bug al cambiar de vuelta a esta sección antes de cumplirse los 5s
  }, []);


  

/*   let cont = 0

  function rotateImg() {
    const list = document.querySelectorAll(".banner-element")
    list.forEach(el => {
      el.classList.remove("active")
    })

    
    cont++
    if (cont > list.length) {cont = 1}
    list[cont - 1].classList.add("active")

    setTimeout(rotateImg, 100)
  }  */

  return (
    <div>
      <figure className="figure-banner">
        <img src="/final-fantasy-heroes/img/banner/ff-12.jpg" alt="ff-12" className="banner-element fade active"/>
        <img src="/final-fantasy-heroes/img/banner/dissidia-villains.jpg" alt="villains" className="banner-element fade"/>
        <img src="/final-fantasy-heroes/img/banner/tactics.jpg" alt="ff-tactics" className="banner-element fade"/>
      </figure>
    </div>
  );
}
  
export default Banner;
