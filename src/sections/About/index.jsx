import circleBackground from "../../img/circleBackground.svg";
import mobileCircleBackground from "../../img/circleBackgroundMobile.svg";
import seta from "../../img/seta.svg";
import "./about.css";

const About = () => {
  const mySkils = {
    techs: ["Js", "HTML", "CSS", "React", "PHP", "Drupal","TypeScrip","Figma"],
  };

  return (
    <section id="about" className="flex">
      <h2>Sobre mim</h2>
      <div className="about-container flex">
        <div className="about-left-side flex">
          <div className="about_img_desktop">
            <img
              src={circleBackground}
              alt="background circles"
              className="background-circles"
            />
          </div>
          <div className="about_img_mobile">
            <img
              src={mobileCircleBackground}
              alt="background mobile circles"
              className="background-circles"
            />
          </div>
        </div>

        <div className="about-right-side flex">
          <div className="myDescription">
            <p>
              Olá, me chamo Yuri e sou estudante de Engenharia da Computação e
              desenvolvedor Front-end. Trabalhei na execução de alguns projetos
              pessoais para o desenvolvimento das minhas habilidades e novos
              aprendizados.
            </p>
            <br />
            <p>
              Estou sempre disposto a aprender novas tecnologias e
              constantimente estudando e praticando para que os meus
              conhecimentos se mantenham atualizados.
            </p>
          </div>

          <div className="workingTech">
            <p>Algumas tecnologias com que eu venho trabalhando:</p>
            <br />
            <div className="skills-container">
              {mySkils.techs.map((tech) => (
                <div className="skill flex">
                  <img src={seta} /> <p>{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
