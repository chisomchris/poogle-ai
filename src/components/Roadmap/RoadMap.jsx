import "aos/dist/aos.css";
import { RiGovernmentFill } from "react-icons/ri";
import { FaPeopleCarry } from "react-icons/fa";
import { MdCasino } from "react-icons/md";
import style from "./roadmap.module.css";

function RoadMap() {
  return (
    <div className={style.wrapper}>
      <div className="container">
        <h1> Road-Map </h1>
        <div className={style.list_container}>
          <ul>
            <li> Website launch</li>
            <li> Airdrop </li>
            <li> Com-Building </li>
            <li> Token sale </li>
            <li> Exchange Listing</li>
          </ul>
          <ul>
            <li>Airdrop</li>
            <li>Burning </li>
            <li> Com-Expansion </li>
            <li>Marketing </li>
            <li>Governance </li>
          </ul>
          <ul>
            <li>More listing on CEX and DEX </li>
            <li>Multichain deployment </li>
            <li>Governance - Product Call</li>
          </ul>
        </div>

        <div className={style.use_case}>
          <h1>Use Cases</h1>
          <div className={style.list_container}>
            <div>
              <RiGovernmentFill className={style.icon} />{" "}
              <p className="RoadMapTitles">Governance</p>
            </div>
            <div>
              <FaPeopleCarry className={style.icon} />{" "}
              <p className="RoadMapTitles">Social Causes</p>
            </div>
            <div>
              <MdCasino className={style.icon} />{" "}
              <p className="RoadMapTitles"> Staking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
