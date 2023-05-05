import '../Styles/Home.css';
import {
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";
import Typical from "react-typical";
import Subham_Sahoo_Resume from "../download/Subham_Sahoo_Resume (1).pdf";
import { DownloadIcon } from '@chakra-ui/icons';
import subham from "../Image/profilepic.jpg";

const HomePage = () => {
    return (
        <div id='Home'>
            <div className="container">
                <div>
                    <div className="description">
                        <div className="profile-details">
                            <div className="colz">
                                <div className="colz-icon">
                                    <a
                                        href="https://www.linkedin.com/in/subham-sahoo-37089222b/"
                                        target="_blank"
                                        alt="linked in"
                                    >
                                        <i className="">
                                            <FaLinkedinIn className='icon-ease-out' />
                                        </i>
                                    </a>
                                    <a
                                        href="https://github.com/fp05107"
                                        target="_blank"
                                        alt="github"
                                    >
                                        <i className="">
                                            <FaGithub className='icon-ease-out' />
                                        </i>
                                    </a>
                                </div>
                            </div>

                            <div className="profile-details-role">
                                <h6>
                                    Hello, I'm
                                    <span className="highlighted-text">
                                        &nbsp;{" Subham Sahoo "}
                                    </span>
                                </h6>
                                <span className="primary-text">
                                    <>
                                        <Typical
                                            loop={Infinity}
                                            steps={[
                                                "Enthusiastic Developer",
                                                2000,
                                                "Full Stack Developer",
                                                2000,
                                                "Java Backend Developer",
                                                2000,
                                                "React-Redux Developer",
                                                2000,
                                            ]}
                                        />
                                    </>
                                </span>
                                <span className="profile-tag-line">
                                    Aspiring Full-Stack ( React, SQL, Java, SpringBoot), Aspiring Full Stack Web Development at Masai School Bangaluru , KARNATAKA
                                </span>
                            </div>

                            <div>
                                <a href='#contactSection'><button className="btn primary-btn"> Hire Me </button></a>
                                <a
                                    href={Subham_Sahoo_Resume}
                                    download>
                                    <button className="btn highlighted-btn">
                                        Get Resume<DownloadIcon/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="imagebox">
                        <div className="profile-picture">
                            <div className="profile-picture-background">
                                <img
                                    src={subham}
                                    alt="Subham-Sahoo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr color='black' id='aboutMePageSection' />
        </div>
    );
}

export default HomePage;