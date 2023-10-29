"use client"

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import FooterAnimation from "../LottieAnimation/FooterAnimation";

export default function Footer() {

    const handleTopArrowClick = () =>{
       window.scrollTo({
        top:0,
        behavior: "smooth",
       });
    }
   
    return(
    <>
        <section className={styles.footerSection}>
            <div className={styles.footerContent}>
                <FooterAnimation></FooterAnimation>
                <div className={styles.descriptionBlock}>
                    <p>
                    Como cliente do Rei dos Sites, tem até 30 dias para solicitar o
                    cancelamento de seu contrato.
                    </p>
                    <p>
                        {" "}
                        Sua <span>satisfação é completamente assegurada.</span>
                    </p>
                    <button>QUERO ALAVANCAR MINHAS VENDAS!</button>
                </div>
            </div>
        </section>
        <section className={styles.lastBlock}>
            <div className={styles.footerLastBlockContent}>
                <img className={styles.logo} src="/imagens/Logotipos-criativos-9.jpg"></img>
                <p>
                    2023 © Todos os direitos reservados | RUN
                </p>
                <div className={styles.rightSide}>
                    <img className={styles.topArrow} src="/imagens/topArrow.svg" onClick={handleTopArrowClick}></img>
                    <span>Retornar ao topo</span>
                </div>
            </div>
        </section>
    </>
    );
}