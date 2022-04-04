import React from "react";
import "./Statistics.css";
import Count from "../Count/Count";
import { SiCoffeescript } from "react-icons/si";
import { GiLaurelsTrophy } from "react-icons/gi";
import { RiServiceFill, RiMapPinTimeFill } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";

const Statistics = () => {
  return (
    <section className="statistics" data-aos="fade-right">
      {/* -------------------------------------------------------------------------- */
      /*                               STATISTICS LIST                              */
      /* -------------------------------------------------------------------------- */}
      <ul className="statistics-list">
        <li className="statistics-item">
          <SiCoffeescript className="icon" />
          <h4>
            <Count end="1580"></Count>
          </h4>
          <p>Cups of Coffee & Tea</p>
        </li>
        <li className="statistics-item">
          <GiSandsOfTime className="icon" />
          <h4>
            <Count end="25"></Count>
          </h4>
          <p>Years of experience</p>
        </li>
        <li className="statistics-item">
          <RiMapPinTimeFill className="icon" />
          <h4>
            <Count end="250" suffix="k"></Count>
          </h4>
          <p>Hours on Projects</p>
        </li>
        <li className="statistics-item">
          <GiLaurelsTrophy className="icon" />
          <h4>
            <Count end="125"></Count>
          </h4>
          <p>National Award</p>
        </li>
        <li className="statistics-item">
          <RiServiceFill className="icon" />
          <h4>
            <Count end="750"></Count>
          </h4>
          <p>Professional Services</p>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
