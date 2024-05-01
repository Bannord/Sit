import React from "react";

import "./About.scss";

import AboutPng from "../../assets/About.png";

const About = () => {
  return (
    <div className="about_wrapper">
      <h2 className="title_about">
        WE ARE A FAST-GROWING CHAIN OF SHOPS IN BELARUS
      </h2>
      <div className="info_wrapper">
        <div className="left_side_pannel">
          <div className="block_wrapper">
            <h4 className="title_block">58</h4>
            <p>Open stores right now.</p>
          </div>
          <div className="block_wrapper">
            <h4 className="title_block">170</h4>
            <p>Self-service stores.</p>
          </div>
          <div className="block_wrapper">
            <h4 className="title_block">About 2000</h4>
            <p>Selling merchandise every month.</p>
          </div>
          <div className="block_wrapper">
            <h4 className="title_block">About 140 000</h4>
            <p>people come to us every month</p>
          </div>
        </div>
        <div className="right_side_panel">
          <div className="img_wrapper">
            <img src={AboutPng} alt="" />
          </div>
        </div>
      </div>
      <div className="others_info_wrapper">
        <h2 className="about_us">Why us?</h2>
        <div className="wrapper_blocks">
          <ul>
            <li>Reliability</li>
            <li className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              minima?
            </li>
          </ul>
          <ul>
            <li>Quality</li>
            <li className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              deleniti voluptas culpa inventore, eaque nam porro obcaecati cum
              rerum repellendus!
            </li>
          </ul>
          <ul>
            <li>Quickness</li>
            <li className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              minima?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
