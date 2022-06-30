import React from "react";
// import "./Projects.module.css";

function Projects() {
  return (
    <section className="projects" id="projects">
    <h2 className="projects__title">Наши проекты</h2>
    <div className="projects__content">
      <a href="https://monolit.ecodom99.ru/proektirovanie-fundaments.html" target="_blank" rel="noreferrer" className="projects__link">
        <div className="projects__project projects__project_ecodom">
          <div className="projects__img"></div>
          <p className="projects__name">Экодом 99</p>
          <p className="projects__description">Cайт</p>
        </div>
      </a>

      <a href="https://alas-top.ru" target="_blank" rel="noreferrer" className="projects__link">
        <div className="projects__project projects__project_alas">
          <div className="projects__img"></div>
          <p className="projects__name">Alas Kitchen</p>
          <p className="projects__description">Cайт</p>
        </div>
      </a>

      <a href="https://unibit.vercel.app/" target="_blank" rel="noreferrer" className="projects__link">
        <div className="projects__project projects__project_unibit">
          <div className="projects__img"></div>
          <p className="projects__name">UniBit</p>
          <p className="projects__description">Cайт</p>
        </div>
      </a>

      <a href="https://movies-explorer-frontend-orpin.vercel.app/signin" target="_blank" rel="noreferrer" className="projects__link">
        <div className="projects__project projects__project_covorking">
          <div className="projects__img"></div>
          <p className="projects__name">Movies</p>
          <p className="projects__description">Cайт</p>
        </div>
      </a>
    </div>
  </section>
  );
}

export default Projects;
