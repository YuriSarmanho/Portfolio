import Button from "../../components/Button";
import "./home.css";

const Home = () => {
  return (
    <section id="home" className="flex">
      <div className="home-content">
        <p id="">Olá, meu nome é</p>
        <h1 id="myName">
          Yuri Sarmanho <br />
          Monteiro
        </h1>
        <p>sou desenvolvedor Front-end</p>
      </div>
      <div className="resume-btn">
        <Button name="Currículo" link="#" />
      </div>
    </section>
  );
};

export default Home;
