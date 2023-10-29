"use client"
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import GraphAnimation from "../LottieAnimation/GraphAnimation";


export default function GraphSection() {
   
    return <>
    
        <section className={styles.graphsection}>
            <div className={styles.leftSide}>
                <h2>VOCÊ ESTA <span>SATISFEITO</span> COM O SEU FATURAMTEO?</h2>
                <ul>
                        <li>Se a reposta for <span>NÃO</span> o metodo da RUN pode te ajudar!</li>

                        <li>nosso metodo é que você venda mais e nunca pare de crescer!</li>

                        <li>Nossa empresa é dedicada a fornecer soluções inovadoras e de alta qualidade! </li>

                        <li>A cada projeto que assumimos, buscamos superar as expectativas. </li>
                 </ul>
            </div>
            <div className={styles.rightSide}>
                <GraphAnimation></GraphAnimation>
            </div>
        </section>
    </>

}
       
    
