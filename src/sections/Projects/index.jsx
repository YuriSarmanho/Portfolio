import Project from "./Project";
import "./projects.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle' 

const Projects = () => {
  const projectsData = [
    {
      name: "burger-factory-app",
      description:
        "Primeiro projeto que eu montei utilizando React, uma página de montagem de pedidos, com opções de quantidade de ingredientes e acompanhamentos mostrando no final o total do pedido.",
      pageLink: "#",
      githubLink: "https://github.com/kaeuchoa/burger-factory-app",
      id: 0,
    },
    {
      name: "MovieStar",
      description:
        "Projeto desenvolvido em PHP, realizado com o intuito de fixar os aprezidos realizado durante a execução do curso PHP.",
      pageLink: "#",
      githubLink: "https://github.com/YuriSarmanho/PHPcourse/tree/main/19_movieStar",
      id: 1,
    },
    {
      name: "Calculadora",
      description:
        "Primeiro projeto que eu fiz no aprendizado de Front-end, realizei esse projeto com o intuito de aprender o funcionamento de HTML, CSS, Js. Todo projeto foi montado utilizando apenas essas tecnologias.",
      pageLink: "#",
      githubLink: "https://github.com/YuriSarmanho/Calculadora",
      id: 2,
    },
    {
      name: "CadastroFirebase",
      description:
        "Projeto básico utilizando React com o objetivo de aprender o funcionamento do cadastro em sites utilizando os e-mail do google, utilizando a biblioteca do firebase.",
      pageLink: "#",
      githubLink: "https://github.com/YuriSarmanho/loginPageWithFirebase",
      id: 3,
    },
    // {
    //   name: "Em breve",
    //   description:
    //     "",
    //   pageLink: "#",
    //   githubLink: "#",
    //   id: 4,
    // },
    {
      name: "burger-factory-app",
      description:
        "Primeiro projeto que eu montei utilizando React, uma página de montagem de pedidos, com opções de quantidade de ingredientes e acompanhamentos mostrando no final o total do pedido.",
      pageLink: "#",
      githubLink: "https://github.com/kaeuchoa/burger-factory-app",
      id: 0,
    },
    {
      name: "MovieStar",
      description:
        "Projeto desenvolvido em PHP, realizado com o intuito de fixar os aprezidos realizado durante a execução do curso PHP.",
      pageLink: "#",
      githubLink: "https://github.com/YuriSarmanho/PHPcourse/tree/main/19_movieStar",
      id: 1,
    },
    {
      name: "Calculadora",
      description:
        "Primeiro projeto que eu fiz no aprendizado de Front-end, realizei esse projeto com o intuito de aprender o funcionamento de HTML, CSS, Js. Todo projeto foi montado utilizando apenas essas tecnologias.",
      pageLink: "#",
      githubLink: "https://github.com/YuriSarmanho/Calculadora",
      id: 2,
    },
    {
      name: "CadastroFirebase",
      description:
        "Projeto básico utilizando React com o objetivo de aprender o funcionamento do cadastro em sites utilizando os e-mail do google, utilizando a biblioteca do firebase.",
      pageLink: "#",
      githubLink: "https://github.com/YuriSarmanho/loginPageWithFirebase",
      id: 3,
    },
    // {
    //   name: "Em breve",
    //   description:
    //     "",
    //   pageLink: "#",
    //   githubLink: "#",
    //   id: 4,
    // },
  ];


  return (
    <section id="projects" className="flex">
      <h2>Projetos</h2>
      <Swiper 
        slidesPerView={5}
        loop={true}
        autoplay
        className="swipe"
      >
        {projectsData.map((project) => (
          <SwiperSlide key={(project)} className="swiper-project">
              <Project
                name={project.name}
                description={project.description}
                pageLink={project.pageLink}
                githubLink={project.githubLink}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;