"use client"
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";


export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() =>{
        const handleScroll = () =>{
            const scrolly = window.scrollY || window.pageYOffset;
            const documentHeigth =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const progress = (scrolly / documentHeigth) * 100 ;
            setScrollProgress(progress); 
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() =>{
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if(scrollTop > 0 ){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }

         }
         
         window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };

    }, [])

    return(
    <>
        <header className={`${styles.header} ${scrolled ? styles.scrolled: "" }`}>
            <img className={styles.logo} src="/imagens/Logotipos-criativos-9.jpg"></img>
        </header>
        <div 
            className={styles.progressBar} style={{width:`${scrollProgress}%` }}>

                <div className={styles.progressIndicator}></div>

        </div>
    </>
    );
}