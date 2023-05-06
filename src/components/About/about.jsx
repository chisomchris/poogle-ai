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
            Poogle is a token that is powered by a community of users who
            collaborate to build a thriving, community-driven artificial
            intelligence social meme ecosystem. Poogle leverages the
            capabilities of AI and machine learning to analyze market trends,
            coupled with a keen understanding of social media sentiment and user
            behavior. On Poogle, users are active participants in
            decision-making through democratic voting mechanisms, ensuring
            transparency and accountability at every stage. The memecoin also
            provides rewards and incentives for those who are actively engaged,
            promoting shared ownership and greater involvement. By embracing
            this community-driven approach, Poogle creates a more inclusive,
            transparent, and user-friendly community in the realm of AI-powered
            social finance.
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
              The explosive growth of AI is transforming how we understand
              systems, create, and exchange it. It is helping to unlock a new
              way to see and exploit value. Combined with the heavy
              data-generating platforms like social media and the new form of
              money, cryptocurrency, we want to build a community where everyone
              contributes to and extracts value like never before.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
