import React from "react";
import { HeroWrapper } from "../../AppTheme";
import Inputs from "../Atoms/Inputs";

const Hero = () => {
  return (
    <HeroWrapper>
      <img className="small" src="/public/smallBall.png" alt="" />
      <img src="/public/mediumBall.png" className="medium" alt="" />
      <article>
        <p className="hero--txt">
          Turn your best customers into{" "}
          <span className="fans--txt">loyal fans</span>
        </p>
      </article>
      <article>
        <p className="text">
          Loyalbaze, empowers businesses to offer digital, mobile-first loyalty
          programs to their customers. With our AI Powered platform, you can
          easily create and manage custom loyalty and rewards programs, track
          customer engagement, and gain valuable insights to improve your
          business. Sign up now to get early access.
        </p>
      </article>
      <div>
        <Inputs
          customStyle={"name"}
          type={"text"}
          placeholder={"Tell us your name"}
        />
        <Inputs
          customStyle={"name"}
          type={"text"}
          placeholder={"Enter your email address"}
        />
      </div>
    </HeroWrapper>
  );
};

export default Hero;
