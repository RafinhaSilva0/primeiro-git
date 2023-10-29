"use client"

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function Description() {
   
    return(
    <>
        <section className={styles.descriptionSection}>
            <div className={styles.firstBlock}>
                    <h2><span>CRESÇA RÁPIDO </span>
                    USANDO O PODER DA INTERNET</h2>

                    <p>"Se você deseja levar sua empresa ao próximo nível e alcançar o sucesso que você sempre sonhou, nossos serviços são a chave para o seu crescimento. Com nossa experiência e expertise, oferecemos soluções sob medida que <span>impulsionam o seu negócio</span>, otimizam processos e aumentam a eficiência.</p>

                    <p>E nisso a <span>RUN</span> vai te ajudar !</p>
            </div>
            <div className={styles.secondBlock}>
                <h2><span>OQUE A </span>RUN <span>FAZ?</span></h2>

                <p>A RUN é uma empresa epecialista em desevolver sites , e ajudar a sua empresa a crescer mais. <br />
                Fazemos isso através de sólidos processos validados na ultima década</p>

                <button>QUERO SABER COMO VENDER MAIS!</button>
            </div>
        </section>
    </>
    );
}