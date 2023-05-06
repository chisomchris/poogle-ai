import { useState } from "react";
import logo from "../../assets/Poogle.png";
import style from "./nav.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => {
    setIsExpanded((v) => !v);
  };

  return (
    <div className={style.main_div}>
      <nav className={`container`}>
        <div className={style.flex}>
          <div className={style.nav_logo}>
            <img src={logo} alt="imggg" className={style.imggg} />
            <h2 className={style.poogleLinks}>Poogle</h2>
          </div>

          <button className={style.hamburger} onClick={toggle}>
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
    </div>
  );
}

export default Nav;
