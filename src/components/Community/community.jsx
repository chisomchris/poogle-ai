import style from "./community.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

import { BsMedium } from "react-icons/bs";

function community() {
  return (
      <div className={style.wrapper} id="community">
        <h1>
          Become a Poogleans...{" "}
        </h1>
        <p>
          {" "}
          One of the most important things about community is that it enables us
          to welcome and help people in a way we couldnt as individuals.
        </p>
        <ul className={style.social_links}>
          <li>
            <a href="/" target="_blank" aria-label="Poogle AI community Telegram page">
              <FaTelegramPlane className={style.icon} />
            </a>
          </li>
          <li>
            <a
              href=" https://twitter.com/poogle_ai" target="_blank">
              <IoLogoTwitter className={style.icon} aria-label="Poogle AI community Twiiter page"/>
            </a>
          </li>
          <li>
            <a href="https://poogle.medium.com" aria-label="Poogle AI community Medium account">
              <BsMedium className={style.icon} />
            </a>
          </li>
        </ul>
      </div>
  );
}

export default community;
