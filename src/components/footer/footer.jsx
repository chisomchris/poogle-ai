import Community from "../Community/community";
import { Disclaimer } from "../disclaimer/disclaimer";
import style from './footer.module.css'

function footer() {
  return (
    <div className={style.wrapper}>
      <div className="container">
        <div className={style.flex}>
          <Community />
          <Disclaimer />        
        </div>
      </div>
    </div>
  );
}

export default footer;
