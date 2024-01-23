import Project from "./Project";
import "./swiper.css";
import { useEffect,useState } from "react";

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
      name: "Site Prodepa",
      description:
        "Site institucional realizado durante o meu estágio na PRODEPA, projeto construido através do cms Drupal",
      pageLink: "https://www.prodepa.pa.gov.br/",
      githubLink: "#",
      id: 4,
    },
    {
      name: "Expenses Organize",
      description:
        "Projeto construido como meio de aprendizado de conceitos de React, passado através do curos 'REACT- THE COMPLETE GUIDE'",
      pageLink: "#",
      githubLink: "https://github.com/YuriSarmanho/REACT-COMPLETE-GUIDE/tree/main/expenses_organize",
      id: 5,
    },
    // {
    //   name: "TODO List",
    //   description:
    //     "",
    //   pageLink: "#",
    //   githubLink: "",
    //   id: 6,
    // },
    {
      name: "Credit Card Cadaster",
      description:
        "Projeto que realizei no começo dos meus estudos de front-end, projeto visa fazer uma copia de um cadastro de cartão de crédito, implementando algumas formatações de texto para auxiliar o usuário",
      pageLink: "#",
      githubLink: "https://github.com/YuriSarmanho/Credit-Card-Cadaster",
      id: 7,
    }
  ];

  const [slidesPerView, setSlidesPerView] = useState(5)

  useEffect(()=>{
    function handleResize() {
      if(window.innerWidth > 1440) {
        setSlidesPerView(5)
      }
      if(window.innerWidth < 1440) {
        setSlidesPerView(4)
      }
      if(window.innerWidth < 1150) {
        setSlidesPerView(3)
      }
      if(window.innerWidth < 885) {
        setSlidesPerView(2)
      }
      if(window.innerWidth < 580) {
        setSlidesPerView(1)
      }
     }
     handleResize();
     window.addEventListener("resize", handleResize)

     return () => {
      window.removeEventListener("resize", handleResize)
     }
  },[])


   
  return (
    <section id="projects" className="flex">
      <h2>Projetos</h2>
      <Swiper 
        slidesPerView={slidesPerView}
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