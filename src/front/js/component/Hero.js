import React from "react";

const Hero = () => {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <div className="home-content-discount_stript bg-discount-gradient">
          <img src="" alt="discount png" />
          <p>20% Discount for 1 Month Account</p>
        </div>
        <div className="home-content-heading">
          <h1>
            Open a Welcome Account
            <br />
            and move your{" "}
            <span className="text-gradient">business forward</span> <br />
          </h1>
        </div>
        <div className="home-content-paragraph">
          <p>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>
      <div className="home-image">
        <img src="" alt="robot Image" />
        <div className="gradient-start pink__gradient" />
        <div className="gradient-mid white__gradient" />
        <div className="gradient-end blue__gradient" />
      </div>
    </div>
  );
};

export default Hero;
