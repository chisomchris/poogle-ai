import "aos/dist/aos.css";
import style from "./about.module.css";

function About() {
  return (
    <div className="container">
      <div className={style.About}>
        <div className={style.SecondAbout} data-aos="fade-up">
          <h1 className={style.AboutTitle} >
            {" "}
            About Poogle
          </h1>
          <p className={style.AboutText} >
          With the convergence of AI, 
          social networking, and decentralized identity,
           we introduce Poogle. In the growing world of crypto, 
           where bad actors abound and can quickly control and influence 
           narratives with false identities on social media, 
           Poogle will employ AI and social tools to investigate 
           bad players and unmask their true identities.
            As identity theft is a recurrent theme,
             decentralized IDs could be a solution
          </p>
        </div>

        <div className={style.SecondAbout}  data-aos="fade-up">
          <h1 className={style.AboutTitle} >
          Poogle&rsquo;s Vision
          </h1>
          <p className={style.AboutText} >
          Poogle&rsquo;s vision is to protect individuals from bad actors
           in the crypto world by employing AI and 
           social tools to investigate and unmask their true identities.
            We believe decentralized IDs could be the solution.
          </p>
          <div className={style.WhyPoogle}>
            <h1 className={style.AboutTitle} >
              Why Poogle?
            </h1>
            <p className={style.AboutText} >
            Addresses bad actors in crypto.
             Uses AI and social tools to unmask true identities. 
             Join us to safeguard the crypto world and ensure
              the authenticity of players, especially on social media.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
