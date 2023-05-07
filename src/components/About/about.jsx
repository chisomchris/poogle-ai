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
            Vision
          </h1>
          <p className={style.AboutText} >
            To build a close-knit, collaborative, more inclusive, and engaging
            social community that benefits every member.
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
