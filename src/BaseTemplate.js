import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

const BaseTemplate = () => {
  return (
    <div style={styles.pageContainer}>
      <Navbar/>
      {/* Hero Section with Gradient Background */}
      <section style={styles.heroSection}>
        <div className="container text-center">
          <h1 className="display-4 text-white">Welcome to My Portfolio</h1>
          <p className="lead text-white">
            Offering top-tier programming services
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mt-5">
        <h2 className="mb-4">My Projects</h2>
        <div className="row">
          <ProjectCard imgSrc="" title="FootyCalendar" desc="A legnagyobb munkám eddig, amellyel a felhasználó a világ bármely csapatának meccseit egy kattintással belerakhatja a naptárába." />
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
