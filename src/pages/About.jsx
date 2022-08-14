import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="about-header py-2">
        <h1 className="about-h1 p-3 container">
          <span onClick={() => navigate("/")}>Home</span>
          <span> / About</span> 
        </h1>
      </div>
      <div className="container row m-auto p-0 my-2 my-md-3 mb-lg-5">
        <div className="about-img col-md-6 ">
          <img src="images/header1.jpeg" alt="header-1" className="rounded-3" />
        </div>
        <div className="about-content col-md-6 m-0 px-3">
          <h1 className="p-0 m-0 ">Our Story</h1>
          <div className="about-underline mt-2 mb-4"></div>
          <p className="p-0 m-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
