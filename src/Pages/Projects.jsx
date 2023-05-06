import React from "react";
import "../Styles/Projects.css";
import { FaGithub, FaLink } from "react-icons/fa";
import { BusReservationSystem } from "../Components/BusReservationSystem";
import { MyMedia } from "../Components/MyMedia";

// import cyclic_logo from "../assets/cyclic-logo.png";
import github from "../assets/github.png";
// import npm from "../assets/npm.png";
// import vercel from "../assets/vercel.png";
// import netlify from "../assets/netlify.png";
// import chakraui from "../assets/chakraui.jpg";
// import css from "../assets/css.png";
// import expressjs from "../assets/expressjs.png";
// import html from "../assets/html.png";
// import javascript from "../assets/javascript.png";
// import mongodb from "../assets/mongodb.png";
// import nodejs from "../assets/nodejs.png";
// import react from "../assets/react.png";
// import redux from "../assets/redux.png";
// import vscode from "../assets/vscode.png";
import eclipse from "../assets/eclipse.png";
import hibernate from "../assets/hibernate.png";
import java from "../assets/java.png";
import maven from "../assets/maven.png";
import postman from "../assets/postman.png";
import spring from "../assets/spring.png";
import sql from "../assets/sql.png";
import restapi from "../assets/restapi.png";

export const Projects = () => {
  return (
    <div id="Projects">
      <div className="projectsContainer">
        <div>
          <div className="projectheading">
            <h1>Projects</h1>
          </div>

          <div className="projectBox">
            <div className="projectItem">
              <div className="projectImage">
                <h2 className="project-type">
                  <span>☆</span> My Media{" "}
                </h2>
                <MyMedia />
              </div>
              <div className="projectDetails">
                <h2>Group Project</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  Built with robust and scalable Java Spring Boot framework,
                  this backend project provides seamless connectivity, efficient
                  data management, and secure user authentication for your
                  social media app. With RESTful APIs, database integration, and
                  optimized performance, this backend solution ensures smooth
                  functionality, reliable data handling, and enhanced user
                  experience. Get your social media app up and running with the
                  power of Java Spring Boot backend!"
                </div>

                <div className="techStacks">
                  <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                          <img src={java} alt="java" />
                        </div>
                        <div>
                          <p>Java</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={spring} alt="spring" />
                        </div>
                        <div>
                          <p>Spring</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={hibernate} alt="hibernate" />
                        </div>
                        <div>
                          <p>Hibernate</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={maven} alt="Maven" />
                        </div>
                        <div>
                          <p>Maven</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={restapi} alt="rest api" />
                        </div>
                        <div>
                          <p>Rest API</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={sql} alt="Sql" />
                        </div>
                        <div>
                          <p>SQL</p>
                        </div>
                      </div>

                      <div className="languages">
                        <div>
                          <img src={postman} alt="postman" />
                        </div>
                        <div>
                          <p>Postman</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={eclipse} alt="eclipse" />
                        </div>
                        <div>
                          <p>eclipse</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={github} alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="btn">
                    <button>
                      <h3>
                        <a
                          href="https://github.com/fp05107/Social_Media"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub /> GitHub Repo
                        </a>
                      </h3>
                    </button>
                    <button>
                      <h3>
                        <a
                          href="https://drive.google.com/file/d/1T9I8B3I6nZAWEzTdZ-U7Q-TdAEt5s42S/view?usp=sharing"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLink /> Video Link
                        </a>
                      </h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="projectItem">
              <div className="projectImage">
                <h2 className="project-type">
                  <span>☆</span> BusReservation System{" "}
                </h2>
                <BusReservationSystem />
              </div>
              <div className="projectDetails">
                <h2>Group Project</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />A REST API for a Bus Reservation System Portal
                  application. This API performs all the fundamental CRUD
                  operations of any Bus Reservation System Portal with user
                  validation at every step.
                </div>

                <div className="techStacks">
                  <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                          <img src={java} alt="java" />
                        </div>
                        <div>
                          <p>Java</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={spring} alt="spring" />
                        </div>
                        <div>
                          <p>Spring</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={hibernate} alt="hibernate" />
                        </div>
                        <div>
                          <p>Hibernate</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={maven} alt="Maven" />
                        </div>
                        <div>
                          <p>Maven</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={restapi} alt="rest api" />
                        </div>
                        <div>
                          <p>Rest API</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={sql} alt="Sql" />
                        </div>
                        <div>
                          <p>SQL</p>
                        </div>
                      </div>

                      <div className="languages">
                        <div>
                          <img src={postman} alt="postman" />
                        </div>
                        <div>
                          <p>Postman</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={eclipse} alt="eclipse" />
                        </div>
                        <div>
                          <p>eclipse</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={github} alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="btn">
                    <button>
                      <h3>
                        <a
                          href="https://github.com/fp05107/Bus_Reservation_System"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub /> GitHub Repo
                        </a>
                      </h3>
                    </button>
                    <button>
                      <h3>
                        <a
                          href="https://drive.google.com/file/d/1T9I8B3I6nZAWEzTdZ-U7Q-TdAEt5s42S/view?usp=sharing"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLink /> Video Link
                        </a>
                      </h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />

            <br />
          </div>
        </div>
      </div>
      <hr id="contactPageSection" />
    </div>
  );
};
