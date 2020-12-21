import * as React from "react";
import Navbar from "../Navbar";
import computer from "../../images/computer.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="about">
        <img src={computer} alt="computer" className="about__img" />
        <h2 className="heading-title">Full Stack Developer</h2>
        <span className="about-span__me">
          Hi I am a fun loving, full stack developer who loves to build great
          websites. I have a passion for learning new things and recalling
          useless trivia.
        </span>
      </section>
      <section>This is my Stack: HTML 5</section>
    </div>
  );
}
