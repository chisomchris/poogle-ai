import  { useEffect } from "react";
import style from "./home.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../../assets/Poogle.png";
import poddle from "../../assets/poodle.png";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={style.mainHeroDiv} id="home">
      <div className={`container `}>
        <nav className={style.nav}>
          <div className={style.logo}>
            <img
              src={logo}
              width="100px"
              height="100px"
              alt="imggg"
              data-aos="zoom-in"
            />
            <h1 className={style.poogle}>Poogle</h1>
          </div>
          <ul className={style.links}>
            <li>
              {" "}
              <a href="#tokenomics"> Tokenomics</a>
            </li>
            <li>
              {" "}
              <a href="#community">Community</a>
            </li>
            <li>
              <button className={style.launchBtn} data-aos="zoom-in">
                {" "}
                Launch&nbsp;App
              </button>
            </li>
          </ul>
        </nav>
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
