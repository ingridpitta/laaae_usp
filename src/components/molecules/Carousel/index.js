import React from "react";
import { Carousel as Carrossel } from 'antd';
import {CarouselContent} from "../";
import "./carousel.styles.scss";

const Carousel = ({images}) => {
    return(
        <div className="carousel--container">
        <Carrossel autoplay>
           {images.map(({src}) => <CarouselContent image={src}/>)}
        </Carrossel>
        </div>
    )
}

export default Carousel;