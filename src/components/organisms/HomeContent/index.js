import React from "react";
import "./homeContent.styles.scss";

const HomeContent = ({ posts }) => {
  return (
    <main>
      <section className="carrossel--container">
        <div>
          <div>
            <h1>LAAAE - USP</h1>
            <h2>RESUMINHO</h2>
            <h3>TEXTO</h3>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>
            Educação para <span>TODES</span>
          </h2>
          <div>
            <a href="/evolucaoparatodes">Conheça o projeto</a>
            <img src="" alt="ir para educação para todes" />
          </div>
          <p>
            Adipisicing deserunt dolore mollit non consectetur ea dolor nulla
            ea. Aute minim proident laboris sunt sunt eu. Adipisicing deserunt
            dolore mollit non consectetur ea dolor nulla ea. Aute minim proident
            laboris sunt sunt eu. Adipisicing deserunt dolore mollit non
            consectetur ea dolor nulla ea. Aute minim proident laboris sunt sunt
            eu.Adipisicing deserunt dolore mollit non consectetur ea dolor nulla
            ea. Aute minim proident laboris sunt sunt eu.Adipisicing deserunt
            dolore mollit non consectetur ea dolor nulla ea. Aute minim proident
            laboris sunt sunt eu.
            <span>
              <a href="/evolucaoparatodes">Saiba Mais</a>
            </span>
          </p>
        </div>
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
