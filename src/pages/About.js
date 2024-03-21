import React from 'react'
import '../styles/About.css'
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Welcome to Maurya's Pizzeria, where every slice tells a story of
          passion and flavor. Our menu features a tantalizing array of pizzas,
          from classic Margheritas to gourmet creations like Truffle Mushroom or
          BBQ Chicken. Crafted with the finest ingredients and traditional
          techniques, each pizza is a culinary journey through Italy, promising
          a delightful experience whether you dine in our cozy restaurant or
          enjoy delivery at home. Join us and indulge in the essence of
          authentic Italian pizza, where every bite is a celebration of taste
          and tradition. Buon appetito!
        </p>
      </div>
    </div>
  );
}

export default About
