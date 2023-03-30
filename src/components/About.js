import React, { Component } from "react";
//import { Link } from "react-router-dom";

export class About extends Component {
  render() {
    return (
      <>
        <div className="newsabout">
          <h2 className="h2">About News Web Application</h2>
          <h3>News Web App</h3>
          <p>
            This News websites is devoted to delivering the news in the text format
            . this is an online website which provides the National news in
            the different domains like (General, Bussiness, Entertainment,
            Sports, Health, Science and Technology) related News. this website provide the news only in English Language.
          </p>
          <h3>
            Free to use
          </h3>
          <p>
           this website is free to use and get the daily updated news of different category.
          </p><br />
          <h3>
            Technology Used
          </h3>
          <p>
            For develope to this web Application we use the <a rel="noreferrer" target={"_blank"} href="https://legacy.reactjs.org/docs/getting-started.html"> React.js</a>
            (HTML and CSS) and also use the News Api to get daily news.
          </p>
        </div>
        <div className="body">
          <footer>
            <div className="containers">
              <div className="sec aboutus">
                <h2>About Me</h2>
                <p>
                  My name is Sandeep Kumar. I'm from Budaun - Uttar Pradesh
                  (India). I'm pursuing a B.Tech final year in the stream of
                  Information Technology from Rajkiya Engineering College,Banda
                  (Which is Affiliated to AKTU). I did my schooling at MLIC
                  Wazirganj (Budaun).
                </p>

                <ul className="sci">
                  <li>
                    <a href="https://www.facebook.com/Sandeepkumar7830?mibextid=ZbWKwL">
                      <i
                        className="fa fa-facebook-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/sandeep_7.8?igshid=NTA5ZTk1NTc=">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/sandeepsingh7_8?t=RiIORblYV0H32tve2I28cw&s=08">
                      <i
                        className="fa fa-twitter-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/sandeep-kumar-717b35226">
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/sandeeparyan001">
                      <i className="fa fa-github-square" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sec quicklinks">
                <h2>Quick Links</h2>
                <ul>
                  <li>
                    <a href="https://newsapi.org/">News Api</a>
                  </li>
                  <li>
                    <a href="https://sandeepkumarsidha.netlify.app/">
                      My Website
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sec contact">
                <h2>Contact Info</h2>
                <ul className="info">
                  <li>
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <span>
                      Budaun Uttar Pradesh <br /> India <br />
                      Pin: 243725
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    <p>
                      <a href="tel:7830117341">+917830117341</a>
                      <br />
                      <a href="tel:7668183569">+917668183569</a>
                    </p>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <p>
                      <a href="mailto:sandeepwzj001@gmail.com">
                        sandeepwzj001@gmail.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default About;
