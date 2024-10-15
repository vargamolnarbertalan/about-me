import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import './BaseTemplate.css';

const BaseTemplate = () => {
  return (
    <div style={styles.pageContainer}>
      <Navbar/>
      {/* Hero Section with Gradient Background */}
      <section style={styles.heroSection}>
        <div className="container text-center">
          <h1 className="display-4 text-white">Kapcsolódjon potenciális ügyfeleivel!</h1>
          <p className="lead text-white">
            Olcsó, egyedi IT megoldások személyes odafigyeléssel
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mt-5">
        <h2 className="mb-4">Referenciáim</h2>
        <div className="row">
        <div className="col">
          <ProjectCard imgSrc="fc.png" link="https://footycalendar.com" title="Footy Calendar" desc="A legnagyobb munkám eddig, amellyel a felhasználó a világ bármely csapatának meccseit egy kattintással belerakhatja a naptárába." />
          <ProjectCard imgSrc="viewers.png" link="https://viewers.video1.hu/twitch/eslcs" title="Egyidejű nézők" desc="Ez a webszerver Twitch, YouTube és TikTok csatornák egyidejű nézőszámát írja ki élőben, és folyamatosan frissül. Hasznos tartalomgyártók számára." />
       </div>
        <div className="col">
          <ProjectCard imgSrc="wp.png" link="https://wasspord.onrender.com" title="WassPord" desc="Ingyenes és biztonságos felhő alapú adatkezelő bejelentkezési- és fizetési információkhoz és privát feljegyzésekhez. Elérhető hozzá szintén saját, a bejelentkezést automatikusan kitöltő bővítmény." />
          <ProjectCard imgSrc="fts.png" link="https://shoflo.video1.hu" title="Follow the Show" desc="Produkciós csapatok számára az adásmenet szerkesztésére és élő követésére alkalmas webapp, tableten és telefonon is kényelmes elrendezéssel." />
        </div>
        <div className="col">
          <ProjectCard imgSrc="r6.png" link="https://www.youtube.com/live/3wEMk1aUKjI?si=tP625td3Ycfvj2Vj&t=2475" title="Esport kamera HUD" desc="Szakdolgozatom alapjául is szolgáló appom, ami lehetővé teszi az esport mérkőzéseken a játékosok kameráinak automatikus megjelenítését. Példa videóért kattintson a képre." />
          <ProjectCard imgSrc="excelion.png" link={false} title="Excelion" desc="Egy interfész, ami lehetővé teszi, hogy a lokális .xlsx vagy .xlsm munkafüzetünket WEB API-szerűen irányítsuk HTTP GET requesteken keresztül. Az Excelion szerver kap egy fájl elérési útvonalat és egy utasítás nevet, amit lefuttat anélkül, hogy a felhasználó hozzáérne az Excelhez. Televíziós feliratozáshoz remek kiegészítő." />
        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mt-5">
        <h2 className="mb-4">Várom megkeresését!</h2>
        <div className="row">
          <ProjectCard imgSrc="" link={false} title="WhatsApp" desc="+36 20 236 6969"/>
        </div>
      </section>

    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
  },
  heroSection: {
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    padding: "100px 0",
  },
};

export default BaseTemplate;
