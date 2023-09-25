import {useState} from "react";
import Project from "./Project";
import "./projects.css";

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
    // {
    //   name: "Quiz",
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl.",
    //   pageLink: "#",
    //   githubLink: "#",
    //   id: 3,
    // },
    // {
    //   name: "Conversor de Medida",
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl.",
    //   pageLink: "#",
    //   githubLink: "#",
    //   id: 4,
    // },
    {
      name: "CadastroFirebase",
      description:
        "Projeto básico utilizando React com o objetivo de aprender o funcionamento do cadastro em sites utilizando os e-mail do google, utilizando a biblioteca do firebase.",
      pageLink: "#",
      githubLink: "https://github.com/YuriSarmanho/loginPageWithFirebase",
      id: 5,
    },
    // {
    //   name: "CadastroFirebase",
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl.",
    //   pageLink: "#",
    //   githubLink: "#",
    //   id: 5,
    // },
    // {
    //   name: "CadastroFirebase",
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl.",
    //   pageLink: "#",
    //   githubLink: "#",
    //   id: 5,
    // },
  ];
  
  return (
    <section id="projects" className="flex">
      <h2>Projetos</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <Project
            name={project.name}
            description={project.description}
            pageLink={project.pageLink}
            githubLink={project.githubLink}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
