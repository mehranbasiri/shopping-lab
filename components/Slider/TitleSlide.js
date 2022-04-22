import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
export function TitleSlide() {
  return (
    <div className="SlideImg">
      <Carousel fade="true" interval="2000">
        <Carousel.Item>
          <img
            className="title-slide"
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg?ikxsywW.QZ5qY0zj7GdEv9Yo7M1oOtpo&size=770:433"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="title-slide"
            src="https://www.komando.com/wp-content/uploads/2020/03/dreamstime_m_140964496-1.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="title-slide"
            src="https://www.wallpaperflare.com/static/931/779/728/girl-laptop-shopping-white-background-wallpaper-preview.jpg"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
