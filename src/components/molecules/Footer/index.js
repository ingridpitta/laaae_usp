import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Fb} from "../../../assets/fb_icon.svg";
import {ReactComponent as Insta} from "../../../assets/insta_icon.svg";
import "./footer.styles.scss";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer--siteMap">
                <h2>LAAAE</h2>
                <h3>Mapa do Site</h3>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/sobre"><li>Sobre</li></Link>
                    <Link to="/publicacoes"><li>Publicações</li></Link>
                    <Link to="/acervo"><li>Acervo</li></Link>
                    <Link to="/divulgacao-cientifica"><li>Divulgacao Científica</li></Link>
                    <Link to="/equipe"><li>Equipe</li></Link>
                    <Link to="/destaques"><li>Destaques</li></Link>
                    <Link to="/noticias"><li>Notícias</li></Link>
                    <Link to="/facaparte"><li>Faça Parte do LAB</li></Link>
                    <Link to="/evolucaoparatodes"><li>Evolução para TODES</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <Link to="/eventos"><li>Eventos</li></Link>
                    <Link to="/campo"><li>Campo</li></Link>
                </ul>
            </div>
            <div className="footer--contactInfos"> 
                <h3>Contato</h3>

                <div>
                    <h3>Endereço av loremipsum, 777</h3>
                    <h3>Telefone (11) 3333-3333</h3>
                    <h3>email laaae.usp.com.br</h3>
                </div>

                <div>
                    <h3>Redes Sociais</h3>
                    <div>
                        <Link to="/fb" target="_blank"><Fb/></Link>
                        <Link to="/insta" target="_blank"><Insta/></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;