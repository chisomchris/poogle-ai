import { useState , useEffect} from "react";
import logo from "../../assets/Poogle.png";
import style from "./nav.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => {
    setIsExpanded((v) => !v);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={style.main_div}>
      <div className='container'>
      <nav className={style.mobile}>
        <div className={style.flex}>
          <div className={style.nav_logo}>
            <img src={logo} alt="imggg" className={style.imggg} />
            <h2 className={style.poogleLinks}>Poogle</h2>
          </div>

          <button className={style.hamburger} onClick={toggle} aria-label="Hambuger menu toggle">
            {isExpanded ? (
              <FaTimes style={{ fontSize: "1.75rem" }} />
            ) : (
              <FaBars style={{ fontSize: "1.75rem" }} />
            )}
          </button>
        </div>

        <ul className={`${style.ul} ${isExpanded ? style.full : ""}`}>
          <li>
            <a onClick={toggle} href="#home">
              Poogle
            </a>
          </li>
          <li>
            <a onClick={toggle} href="#tokenomics">
              Tokenomics
            </a>
          </li>
          <li>
            <a onClick={toggle} href="#community">
              Community{" "}
            </a>
          </li>
          <li>
            <button className={style.launchBtn}> Launch&nbsp;App</button>
          </li>
        </ul>
      </nav>
      
      <nav className={style.nav}>
          <div className={style.logo}>
            <img src={logo} alt="imggg" className={style.imggg} />
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
      </div>
    </div>
  );
}

export default Nav;
