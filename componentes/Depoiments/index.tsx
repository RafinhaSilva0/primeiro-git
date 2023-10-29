"use client"

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const testimonials = [
    {
      id: 1,
      name: "Roberto Carlos",
      date: "22.Abril, 2022",
      rating: "/imagens/stars.png",
      verified: "/imagens/verificationLogo.png",
      content:
        "Estou extremamente satisfeita com a parceria que fiz com a RUN. Eles criaram um site profissional e eficiente para minha loja que me surpreendeu positivamente com suas métricas e processos totalmente alinhados com a verdadeira demanda da área de vendas.",
      image: "/imagens/cliente2.png",
    },
    {
      id: 2,
      name: "Marcela Alvarez",
      date: "06.Março, 2022",
      rating: "/imagens/stars.png",
      verified: "/imagens/verificationLogo.png",
      content:
        "Trabalhar com a equipe da RUN foi uma experiência incrível. Eles foram muito profissionais e atenciosos em todos os aspectos da criação do meu site. Eles foram capazes de capturar perfeitamente a essência da minha marca e transformá-la em um site funcional e atraente que realmente se destaca.",
      image: "/imagens/cliente3.png",
    },
    {
      id: 3,
      name: "Rafaela Da Silva",
      date: "10.Janeiro, 2022",
      rating: "/imagens/stars.png",
      verified: "/imagens/verificationLogo.png",
      content:
        "Quando eu decidi criar um site para a minha empresa, eu estava um pouco apreensivo sobre como seria o processo. Mas a equipe da  RUN fez tudo parecer tão fácil! Eles foram muito profissionais e experientes em todo o processo, desde a concepção até a entrega final do site.",
      image: "/imagens/cliente4.png",
    },
    {
      id: 4,
      name: "Lucas Bambu",
      date: "25.Novembro, 2021",
      rating: "/imagens/stars.png",
      verified: "/imagens/verificationLogo.png",
      content:
        "Trabalhar com a equipe da  RUN foi uma experiência muito gratificante. Eles foram muito atenciosos e prestativos durante todo o processo de criação do meu site. Eles me mantiveram informado em cada etapa do projeto e foram muito ágeis em responder a todas as minhas perguntas e solicitações.",
      image: "/imagens/cliente5.png",
    },
  ];

export default function Depoiments() {

    const[currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

    const previousTestimonial = () =>{
        setCurrentTestimonialIndex((currentTestimonialIndex - 1 + testimonials.length) % testimonials.length)
    };

    const nextTestimonial = () =>{
        setCurrentTestimonialIndex((currentTestimonialIndex + 1) % testimonials.length)
    };
   
    return(
    <>
        <section className={styles.depoimentSection}>
            <div className={styles.depoimentContainerSection}>
                    <img className={styles.iconeRoxo} src="/imagens/iconeVoltaRoxa.png"></img>
                    <h3>OQUE OS NOSSOS CLIENTES DIZEM</h3>
                    <div className={styles.depoimetContainer}>

                        <img className={`${styles.arrow} ${styles.leftArrow}`} src="/imagens/ArrowSection.png" 
                        onClick={previousTestimonial}>
                        </img>

                        <div className={styles.contentDepoiment}>
                            <div className={styles.userInfoBlock}>
                                <img src={testimonials[currentTestimonialIndex].image} 
                                    alt={testimonials[currentTestimonialIndex].name}></img>
                            
                            <div className={styles.userName}>
                                <h4>{testimonials[currentTestimonialIndex] .name}</h4>
                                <p>{testimonials[currentTestimonialIndex] .date} </p>
                            </div>
                        </div>
                        <div className={styles.avaliationImgs}>
                            <img src={testimonials[currentTestimonialIndex] .rating}></img>
                            <img src={testimonials[currentTestimonialIndex] .verified}></img>
                        </div>
                        <div className={styles.avaliationDescription}>
                            <p>{testimonials[currentTestimonialIndex] .content}</p>
                        </div>
                        <img className={styles.googleImage} src="/imagens/googleimage.png"></img>
                        </div>
                    <img className={`${styles.arrow} ${styles.rightArrow}`} src="/imagens/ArrowSectionRight.png" onClick={nextTestimonial}></img>
                    </div>
            </div>
        </section>
    </>
    );
}