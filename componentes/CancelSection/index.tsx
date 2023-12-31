"use client"

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import CheckAnimation from "../LottieAnimation/CheckAnimation";

export default function CancelSection() {
   
    return(
    <>
       <section className={styles.cancelSection}>
        <div className={styles.leftSide}>
            <h3>
                Cancele<span> Quando quiser! </span>
            </h3>
            <p>
                A RUN isenta o seu risco removendo a multa.{" "}
                <span>Se por algum motivo fora do comum</span>, você não estiver
                satisfeito com o trabalho, você pode{" "}
                <span>cancelar quando quiser sem pagar um centavo</span> sequer pela
                recisão contratual, desde que cumprido o aviso prévio.
            </p>
        </div>
        <div className={styles.rightSide}>
            <CheckAnimation></CheckAnimation>
        </div>
       </section>
    </>
    );
}