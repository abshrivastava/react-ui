import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function carouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="../images/img01.jpg" />
                </div>
                <div>
                    <img src="../images/img02.jpg" />
                </div>
                <div>
                    <img src="../images/img03.jpg" />
                </div>
            </Carousel>
        </div>
    );
}