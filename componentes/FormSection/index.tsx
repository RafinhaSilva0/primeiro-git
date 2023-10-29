"use client"
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";


export default function FormSection() {

   
        
      
    

    
   
    return(
    <>
       
        <section className={styles.graphsection}>
            <div className={styles.titleSection}>
            <h2>
                Preencha o formulário para ter um <span>time de especialista montado </span> pela RUN 
            </h2>
            </div>
            <div className={styles.formSection}>
                <div className={styles.lefSection}>
                    <img className={styles.logo} src="/imagens/arvore-sem-fundo3.png"  />
                </div>
            
            <div className={styles.rightSection}>
                <form className={styles.form}>
                    <div className={styles.imputGroup}>
                        <input 
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Qual é o seu nome ?"
                         />
                    </div>
                    <div className={styles.imputGroup}>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Qual é o seu email?"
                         />
                    </div>
                    <div className={styles.imputGroup}>
                        <input 
                        type="telefone"
                        id="telefone"
                        name="telefone"
                        placeholder="Qual o seu telefone ?"
                         />
                    </div>
                    <div className={styles.imputGroup}>
                        <input 
                        type="nome da empresa"
                        id="nome da empresa"
                        name="nome da empresa"
                        placeholder="Qual é o nome da sua empresa ?"
                         />
                    </div>
                    <div className={styles.imputGroup}>
                        <select id="segmento" name="segmento">
                            <option value="">Qual é o seu segmento </option>
                            <option value="Tecnologia">Tecnologia</option>
                            <option value="Varejo">Varejo</option>
                            <option value="Saúde">Saúde </option>
                            <option value="Trânsito">Trânsito</option>
                            <option value="Esporte">Esporte</option>
                        </select>
                    </div>
                    <div className={styles.imputGroup}>
                        <select id="segmento" name="segmento">
                            <option value="">Quantos funcionarios voce tem hoje? </option>
                            <option value="1 - 5">1 - 5</option>
                            <option value="5 - 50">5 - 50</option>
                            <option value="50 - 300">50 - 300</option>
                            <option value="Acima de 300">Acima de 300</option>
                        </select>
                    </div>
                    <div className={styles.imputGroup}>
                        <select id="faturamento" name="faturamento">
                            <option value="">Qual é o faturamento da sua empresa? </option>
                            <option value="R$ 1.000 - 5.000">R$ 1.000 - 5.000</option>
                            <option value="R$ 5.000 - 50.000">R$ 5.000 - 50.000</option>
                            <option value="R$ 5.000 - 300.000">R$ 5.000 - 300.000</option>
                            <option value="Acima de  300.000">Acima de 300.000</option>
                        </select>
                    </div>
                    <button type="submit" className={styles.button}>
                        RECEBER O CONTATO DA RUN 
                    </button>
                </form>
                </div>
            </div>
        </section>

        
    </>
    );
}