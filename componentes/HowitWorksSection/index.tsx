"use client"

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ClientAnimation from "../LottieAnimation/ClientAnimation";
import ReactAnimation from "../LottieAnimation/ReactAnimation";
import ConfigAnimation from "../LottieAnimation/ConfigAnimation";
import IncreaseAnimation from "../LottieAnimation/IncreaseAnimation";

export default function HowitWorksSection() {
   
    return(
    <>
       <section className={styles.howitworksSection}>
        <h2>
            <span>COMO</span> FUNCIONA?
        </h2>
        <div className={styles.secondBlock}>
            <div className={styles.row}>
                <div className={styles.containerIcon}>
                    <ClientAnimation></ClientAnimation>
                    <h4>Experiencia de
                        <span> Qualidade </span>
                    </h4>
                    <p>Nós temos anos de experiência em desevolvimento de sites e já ajudamos mais de 200 clietes a atingirem seus objetivos</p>
                </div>
                <div className={styles.containerIcon}>
                    <ReactAnimation></ReactAnimation>
                    <h4>Totalmente
                        <span> Personalizado </span>
                    </h4>
                    <p>
                        Trabalharemos em estreita colaboração com você para entender
                        suas necessidades específicas e criar um site que reflita a
                        identidade visual e os valores de sua empresa.
                    </p>
                </div>
                <div className={styles.containerIcon}>
                    <ConfigAnimation></ConfigAnimation>
                    <h4>Suporte e <span>  Atendimento</span>
                    </h4>
                    <p>  
                        Estamos sempre disponíveis para ajudar em qualquer etapa do
                        processo de desenvolvimento do site e, após o lançamento,
                        oferecemos suporte contínuo para garantir que tudo funcione
                        perfeitamente. 
                    </p>
                </div>
                <div className={styles.containerIcon}>
                    <IncreaseAnimation></IncreaseAnimation>
                    <h4>Crescimento
                        <span> Acelerado </span>
                    </h4>
                    <p>
                        Encontramos as métricas necessárias para escalar o seu negócio
                        com maior valocidade. Dessa forma, colocaremos a sua empresa em
                        patamares jamais esperimentados antes.
                     </p>
                </div>
            </div>
        </div>
       </section>
    </>
    );
}