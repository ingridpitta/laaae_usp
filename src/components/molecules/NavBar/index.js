import React from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./navBar.styles.scss";

const NavBar = () => {
  const { Search } = Input;
  return (
    <section className="navBar--wrapper">
        <nav className="navBar--container">
      <h1>LAAAE</h1>
      <ul>
        <Link to="/sobre">
          <li>Sobre</li>
        </Link>
        <Link to="/publicacoes">
          <li>Publicações</li>
        </Link>
        <Link to="/acervo">
          <li>Acervo</li>
        </Link>
        <Link to="/pesquisa">
          <li>Pesquisa</li>
        </Link>
        <Link to="/divulgacaocientifica">
          <li>Divulgação Científica</li>
        </Link>
      </ul>
      <Search
        className="search"
        placeholder="Buscar"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    </nav>
    </section>
  );
};

export default NavBar;
