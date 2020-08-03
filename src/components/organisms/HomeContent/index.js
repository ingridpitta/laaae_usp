import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../../assets/arrow_right.svg";
import { Carousel } from "../../molecules";
import ApiService from "../../../service";
import "./homeContent.styles.scss";

const HomeContent = ({ posts, pages }) => {
  return (
    <main className="homeContent--container">
      <section className="carrossel--container">
        <Carousel images={[{ src: "../../../assets/main_picture.png" }]} />
      </section>
      <section className="evolucaoParaTodes--container">
        <aside>
          <h2>
            Evolução para <span>TODES</span>
          </h2>
          <div>
            <Link to="/evolucaoparatodes">Conheça o projeto</Link>
            <Arrow alt="ir para educação para todes" />
          </div>
        </aside>
        <p>
          Adipisicing deserunt dolore mollit non consectetur ea dolor nulla ea.
          Aute minim proident laboris sunt sunt eu. Adipisicing deserunt dolore
          mollit non consectetur ea dolor nulla ea. Aute minim proident laboris
          sunt sunt eu. Adipisicing deserunt dolore mollit non consectetur ea
          dolor nulla ea. Aute minim proident laboris sunt sunt eu.Adipisicing
          deserunt dolore mollit non consectetur ea dolor nulla ea. Aute minim
          proident laboris sunt sunt eu.Adipisicing deserunt dolore mollit non
          consectetur ea dolor nulla ea. Aute minim proident laboris sunt sunt
          eu.
          <span>
            <Link to="/evolucaoparatodes">Saiba Mais</Link>
          </span>
        </p>
      </section>
      <section className="pesquisa--container">
        <h1>Pesquisa</h1>

        <div className="pesquisa--cards">
          {pages.slice(1, 5).map((page, index) => {
            return (
              <div key={`${index + 1}--page`} className="cards--content">
                <h2>{page.title.rendered.toUpperCase()}</h2>
                <Link to={`/pesquisa/${page.slug}`}> + Detalhes</Link>
              </div>
            );
          })}
        </div>

        <div className="section--seeMore">
          <Link to="/pesquisa">Ver Mais</Link>
        </div>
      </section>
      <section className="campo--container">
        <h1>Campo</h1>
      </section>
      <section className="acervo--container">
        <h1>Acervo</h1>

        <div className="section--seeMore">
          <Link to="/acervo">Ver Mais</Link>
        </div>
      </section>
      <section className="publicacoes--container">
        <h1>Publicações</h1>
      </section>
      <section className="destaques--container">
        <h1>Destaques</h1>
      </section>
      <section className="equipe--container">
        <h1>Equipe</h1>
      </section>
      <section className="facaParte--container">
        <h1>Faça Parte do LAB</h1>
      </section>
      {posts.map((post, index) => (
        <div key={`${index + 1}--post`}>
          <h2>{post.title.rendered}</h2>
        </div>
      ))}
    </main>
  );
};

export default HomeContent;
