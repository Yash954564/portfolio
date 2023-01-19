import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import Freekzo from "../../img/Freekzo.png";
import ShopsDigitalAds from "../../img/ShopsDigitalAds.png";
// import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="http://haarvala.com/" target="blank">
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://ovfg.in/" target="_blank" rel="noopener noreferrer">
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <a
            href="http://mymedicalid.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="http://shopsdigitalads.com/beta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ShopsDigitalAds} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://freekzo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Freekzo} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;