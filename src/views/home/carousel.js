import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./carousel.css"

class HomeCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="assets/1.jpg" />
                    <p className="legend">Hiking is a favorite pass time</p>
                </div>
                <div>
                    <img src="assets/3.jpg" />
                    <p className="legend">Getting out in nature is pretty great too</p>
                </div>
                <div>
                    <img src="assets/4.jpg" />
                    <p className="legend">Exploring an abandoned house with a few friends</p>
                </div>
                <div>
                    <img src="assets/5.jpg" />
                    <p className="legend">Mountain biking is a lot of fun</p>
                </div>
            </Carousel>
        );
    }
};
export default HomeCarousel
