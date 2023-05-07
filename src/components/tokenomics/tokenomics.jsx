import style from "./tokenomics.module.css";
import "aos/dist/aos.css";

function Tokenomics() {
  return (
    <div className={style.wrapper} id="tokenomics">
      <div className="container">
        <h1> TOKENOMICS</h1>

        <div className={style.grid_container} data-aos='fade-up'>
          <div className={style.tokenomics_card}>
            <h2>Poogle</h2>
            <h3> Token name </h3>
          </div>

          <div className={style.tokenomics_card}>
            <h2>PGL</h2>
            <h3> Ticker Ticker </h3>
          </div>

          <div className={style.tokenomics_card}>
            <h2>100 trillion</h2>
            <h3> Max Supply </h3>
          </div>

          <div className={style.tokenomics_card}>
            <h2>1%</h2>
            <h3> Buy tax </h3>
          </div>

          <div className={style.tokenomics_card}>
            <h2>1%</h2>
            <h3> Sell tax </h3>
          </div>

          <div className={style.tokenomics_card}>
            <h2>BNB Chain (BSC)</h2>
            <h3> Network </h3>
          </div>
        </div>

        <div className={style.grid_container} data-aos='fade-up'>
          <div className={style.tokenomics_card}>
            <h2>35%</h2>
            <h3> Token Sale </h3>
            <p> 35% of max supply = 35T</p>
          </div>
          <div className={style.tokenomics_card}>
            <h2>25%</h2>
            <h3> Liquidity </h3>
            <p> 25% of max supply = 25T</p>
          </div>
          <div className={style.tokenomics_card}>
            <h2>10%</h2>
            <h3> Community </h3>
            <p> 10% of max supply = 10T</p>
          </div>
          <div className={style.tokenomics_card}>
            <h2>10%</h2>
            <h3> Marketing </h3>
            <p> 10% of max supply = 10T</p>
          </div>
          <div className={style.tokenomics_card}>
            <h2>10%</h2>
            <h3> Developments </h3>
            <p> 10% of max supply = 10T</p>
          </div>
          <div className={style.tokenomics_card}>
            <h2>10%</h2>
            <h3> Chest </h3>
            <p> 10% of max supply = 10T</p>
          </div>
        </div>

        <div className={style.details}>
          <div>
          <h3 className={style.color}>Community, Marketing, Development & Chest</h3>
          <p>10% will be initially unlocked at token sale and the 5% to be unlocked every 2 months. But the chest will remain untouched until other allocations have been expended.</p>
          </div>
          <div>
          <h3 className={style.color}>Burn / Tax</h3>
          <p>Quarterly burn using 50% accumulated tax. Remaining 50% will go to charity.</p>

          <p><span className={style.color}>Unsolved tokens</span> will be burnt</p>
          </div>
          </div>
        </div>
      </div>
  );
}
export default Tokenomics;
