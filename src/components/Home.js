import React from "react";
import '../design/Home.scss';
import Bg from '../images/bg.png';
import { MdViewList} from "react-icons/md";
import { FaLinkedin,FaFacebookMessenger,FaInstagramSquare,FaMailBulk,FaGithub } from "react-icons/fa";

class Home extends React.Component
{

    render()
    {
        return (
          <div className="container-fluid homePage">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-6 mt-5 ">
                                <img alt="mypicture" className="mt-5 img-responsive img-fluid" src={Bg} width="100%" height="50%" />
                                </div>
                                <div className="col-lg-6" id="intro-text">
                                    <h1 className="rowinsbie">I'M ROWINS <b class="text-primary">BIE</b></h1>
                                    <h3 >I DESIGN,DEVELOP WEB SITES & APPS</h3>
                                    <p >I'm  a Full-time IT Support & Web Developer by day and a freelancer by night.If you need a website or a custom web application, Hit me up!</p>
                                   
                                     <h3><FaLinkedin className="social-icons" />
                                      <FaFacebookMessenger className="social-icons" />
                                      <FaInstagramSquare className="social-icons" />
                                      <FaGithub className="social-icons" />
                                      </h3>
                                    <hr />
                                    <button className="btn btn-primary text-white "><MdViewList /> Browse Projects</button>
                                    <button className="btn border text-dark"><FaMailBulk /> Contact Me</button>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}

export default Home;