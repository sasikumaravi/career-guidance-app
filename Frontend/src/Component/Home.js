import React from "react";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../Pics/Untitled-design-2023-04-21T171232.223-1024x638.png";
import pic2 from "../Pics/Answers in your Genes Changing the Face of Career Planning with Genetics_1115-627 copy 2.jpg";
import pic3 from "../Pics/businessman-is-climbing-career-ladder-concept-development-vector-illustration-sketch-design-isolated-background-step-by-step-human-suit-with-briefcase-runs-down-stairs_153097-548.jpg";
import pic4 from "../Pics/boss-standing-front-employee-who-working-worker-sharing-idea-with-chief-flat-vector-illustration-workplace-business-communication-concept-banner-website-design-landing-web-page_74855-21660.jpg"

export default function Home() {
  return (
    <div className="cont">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={pic1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="cont2">
        <div className="shadows-into-light-regular">
          "I've missed more than 9,000 shots in my career. I've lost almost 300
          games. 26 times, I've been trusted to take the game-winning shot and
          missed. I've failed over and over and over again in my life. And that
          is why I succeed." —Michael Jordan
        </div>
        <div>
          <img src={pic3} style={{ height: "500px" }} alt="none" />
        </div>
      </div>
      <div className="cont2">
        <div>
          <img src={pic4} style={{ height: "500px" }} alt="none" />
        </div>
        <div className="shadows-into-light-regular">
        “The difference between great people and everyone else is that great people create their lives actively, while everyone else is created by their lives, passively waiting to see where life takes them next. The difference between the two is the difference between living fully and just existing.”  Michael E. Gerber
        </div>
      </div>
      <footer class="footer">
        <div class="footer-content">
            <div class="social-media">
                <a href="https://instagram.com/" target="_blank"><i class="ri-instagram-line"></i></a>
                <a href="https://twitter.com/in/" target="_blank"><i class="ri-twitter-x-line"></i></a>
                <a href="https://linkedin.com/" target="_blank"><i class="ri-linkedin-box-line"></i></a>
                <a href="https://facebook.com/" target="_blank"><i class="ri-facebook-circle-line"></i></a>
            </div>
            <div class="contact-info">
                <p>Email: <a href="mailto:smartsasi79@gmail.com">smartsasi@gmail.com</a></p>
                <p>Phone: 9344776008</p>
            </div>
            <p class="copy">&copy; 2024 Career Guidance Blog. All rights reserved.</p>
        </div>
    </footer>
    </div>
  );
}
