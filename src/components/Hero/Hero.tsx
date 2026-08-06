"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";

const photos = [
  "/photos/cover01.webp",
  "/photos/cover02.webp",
  "/photos/cover03.webp",
];


export default function Hero() {

  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
const menuRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((prev) =>
        prev === photos.length - 1 ? 0 : prev + 1
      );

    }, 3000);


    return () => clearInterval(timer);

  }, []);



  useEffect(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  return (
    <>


      <section className={styles.hero}>


        <div
          className={styles.topBar}
          style={{
            opacity: Math.min(0.85, scrollY / 500)
          }}
        />



      <div className={styles.topMenu} ref={menuRef}>
  <div
    className={styles.menuIcon}
    onClick={() => setMenuOpen(!menuOpen)}
  >
    <span />
    <span />
    <span />
  </div>

  <div
    className={`${styles.menuDropdown} ${
      menuOpen ? styles.open : ""
    }`}
  >

    <Link href="/sobre-nosotros" className={styles.menuText}>
      Sobre nosotros
    </Link>

    <Link href="/revistas" className={styles.menuText}>
      Revistas
    </Link>

    <Link href="/tienda" className={styles.menuText}>
      Tienda
    </Link>

  </div>

</div>


      




        <Image
  src="/logos/una-revista.png"
  alt="Una revista"
  width={180}
  height={180}
  className={styles.unaRevista}
  style={{
    transform: `translateY(calc(-50% - ${scrollY * 0.35}px))`,
    opacity: Math.max(0, 1 - scrollY / 500),
  }}
/>

<Image
  src="/logos/entre-amigos.png"
  alt="Entre amigos"
  width={180}
  height={180}
  className={styles.entreAmigos}
  style={{
    transform: `translateY(calc(-50% - ${scrollY * 0.35}px))`,
    opacity: Math.max(0, 1 - scrollY / 500),
  }}
/>






        <div className={styles.photo}>


          <Image
            src={photos[current]}
            alt="Portada UDARA"
            fill
            priority
            className={styles.image}
          />



          <div className={styles.logo}>


            <Image
              src="/logos/UDARA.png"
              alt="UDARA"
              fill
              priority
            />


          </div>


        </div>


      </section>






      <section className={styles.nextSection}>


        <div className={styles.mesaContainer}>

          <img
            src="/photos/mesa.webp"
            alt="Mesa"
            className={styles.mesa}
          />

        </div>





        <div className={styles.redesContainer}>

          <img
            src="/logos/redes.png"
            alt="Redes sociales"
            className={styles.redes}
          />

        </div>


      </section>


    </>
  );
}