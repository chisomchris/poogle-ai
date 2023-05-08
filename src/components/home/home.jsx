import style from "./home.module.css";
import poddle from "../../assets/poodle.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={style.mainHeroDiv} id="home">
      <div className={`container `}>
        <div className={style.grid_container}>
          <div className={style.heroDes}>
            <div className={style.hero_text}>
              <h1 className={style.heroH1} data-aos="fade-in">
                {" "}
                A COMMUNITY DRIVEN{" "}
                <span className={style.herocolored}> AI SOCIAL MEME</span> TOKEN
              </h1>
              <div className={style.btns}>
                <button className={style.whitelistBtn}> Whitelist</button>
                <button className={style.whitepaperBtn}> Whitepaper</button>
              </div>
            </div>
            <div className={style.hero_image}>
              <img src={poddle} alt="a poogle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
