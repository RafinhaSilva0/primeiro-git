"use client"

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import MiniAlertAnimation from "../LottieAnimation/MiniAlertAnimation";
import AlertAnimation from "../LottieAnimation/AlertAnimation";

export default function AlertSection() {
   
    return(
    <>
        <section className={styles.containerSection}>
            <div className={styles.alertSection}>
                <MiniAlertAnimation></MiniAlertAnimation>
                <h2>
                    Agora, <span> ATENÇÃO</span>
                </h2>
                <h2>
                    O que é preciso para contratar os serviços da RUN?
                </h2>
                <p>
                Muito simples, basta clicar no botão abaixo e preencher o formulário
                para que nossa equipe de especialistas entre em contato com você.
                </p>
                <button>FALAR COM UM DOS NOSSOS ESPECIALISTAS</button>
            </div>
            <div className={styles.absolute}>
                <AlertAnimation></AlertAnimation>
            </div>
        </section>
    </>
    );
}