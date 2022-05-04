import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
    <h2 className="projects__title">Наши проекты</h2>
    <div className="projects__content">
      <div className="projects__project projects__project_ecodom">
        <div className="projects__img"></div>
        <p className="projects__name">Экодом 99</p>
        <p className="projects__description">Cайт</p>
      </div>
      <div className="projects__project projects__project_alas">
        <div className="projects__img"></div>
        <p className="projects__name">Alas Kitchen</p>
        <p className="projects__description">Cайт</p>
      </div>
      <div className="projects__project projects__project_unibit">
        <div className="projects__img"></div>
        <p className="projects__name">UniBit</p>
        <p className="projects__description">Cайт</p>
      </div>
      <div className="projects__project projects__project_covorking">
        <div className="projects__img"></div>
        <p className="projects__name">Covorking</p>
        <p className="projects__description">Cайт</p>
      </div>
    </div>
  </section>
  );
}

export default Projects;
