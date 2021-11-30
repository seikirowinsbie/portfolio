import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDownloading } from "react-icons/md";
import Logo from '../../images/logo.jpg';
import Resume from '../../files/seiki_rowins_bie.pdf';
import "../../design/NavBar.scss";
export default class NavBar extends React.Component {
  Header() {
    return (
      <>
        <img src={Logo} width="15%" height="15%" alt="logo" />
      </>
    );
  }

 

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container">
          <h1><Link className="nav-brand text-dark" to="/">{this.Header()}</Link></h1>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
             
              <span className="navbar-toggler-icon text-white">  open</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                    <a target="_blank" rel="noreferrer" className="nav-link btn btn-primary text-white" href={Resume}><MdOutlineDownloading /> Resume</a>
                </li>
              </ul>
           
            </div>
          </div>
        </nav>
      </>
    );
  }
}
