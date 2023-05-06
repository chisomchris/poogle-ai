import { useEffect } from 'react';
import Aos from 'aos';
import style from './loading.module.css'
import "aos/dist/aos.css" 
import img from "../../assets/Poogle.png"

function Loading() {
  useEffect(() => {
    Aos.init({duration: 2000})
   }, []);

  return (
    <div className={style['loading-div']}>
  <div className={style.secondLoadingDiv}>
  <div className={style.image}>
    <img src={img} alt="Logo" className={style.logo} data-aos="flip-left"/>

    </div>
    <p className={style.loadingText} data-aos="fade-up"> Poogle - The AI Dog, Future of Reputation 
</p>
  </div>
    </div>
  )
}

export default Loading