import React from "react";
import { Links1, Links2, Links3 } from "../Navigationlinks";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarCS.css";
import "./Mobilenav.css";
import Mobilenav from "./Mobilenav";
import styles from "./Navbar.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";

const NavbarCS = ({ noLinearBackground, landingPage=false, noLinearBackgroundVideo }) => {
  const [menuState, setMenuState] = useState(false);
  const [isDropdownOpenDesk, setIsDropdownOpenDesk] = useState(false);
  const [isDropdownOpenTopical, setIsDropdownOpenTopical] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navitate = useNavigate();
  const [selected5, setSelected5] = useState(false);
  const [style, setStyle] = useState({ display: "none" });

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const hamburgerdropdown = (state) => {
    setSelected5(!state);
  };

  const mouseEnterHandler = () => {
    setStyle({ display: "block" });
  };
  const mouseLeaveHandler = () => {
    setStyle({ display: "none" });
  };

  const navigate = useNavigate();
  const dropdownRef = useRef();
  const dropdownTopical = useRef();


  const services = [
    { name: "Barber Razors", link: "/barber-razors" },
    { name: "Barber Scissors", link: "/barber-scissors" },
    { name: "Eyebrow Tweezers", link: "/eyebrow-tweezers" },
    { name: "Eyelash Tweezers", link: "/eyelash-tweezers" },
    { name: "NailCutting", link: "/nailcutting" },
    { name: "NailCutting Scissor", link: "/nailcutting-scissor" },
    { name: "Nippers", link: "/nipper" },
    { name: "Pushers", link: "/pushers" },
    { name: "Medical Tools", link: "/medical-tools" },
    { name: "Pedicure FootFilers", link: "/pedicure-footfilers" },

  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isDropdownOpenDesk) {
        setIsDropdownOpenDesk(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpenDesk]);

  const menuClick = () => {
    setMenuState((prev) => !prev);
  };



  return (
    <>
      <>
        <header
          style={{
            position: noLinearBackground && "absolute",
            zIndex: !noLinearBackground && 99, 
            backgroundImage:
              noLinearBackgroundVideo || noLinearBackground
                ? "none"
                : "linear-gradient(to right, #1b1b1b , rgb(69, 69, 69))",
          }}
          className={styles.desktopHeader}
        >
          <div className={styles.maindiv}>
          <Container>
            <div className={styles.nav}>
              <h1 onMouseEnter={mouseLeaveHandler}>
                <Link to="/">
                  <img
                    src="/images/hbcare-logo.png"
                    className={styles.logo}
                    alt="HB-Care Logo"
                  />
                </Link>
              </h1>
              <div className={!landingPage ? styles.navList : 'd-none'}>
                <NavLink
                  onMouseEnter={() => mouseEnterHandler()}
                  onClick={mouseLeaveHandler}
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeLink} ${styles.link}`
                      : styles.link
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  onMouseEnter={mouseLeaveHandler}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeLink} ${styles.link}`
                      : styles.link
                  }
                  to="/about"
                >
                 About
                </NavLink>
                <NavLink
                  onMouseEnter={mouseLeaveHandler}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeLink} ${styles.link}`
                      : styles.link
                  }
                  to="/services"
                >
                  Services
                </NavLink>
                <div className="navigation-dropdown">
      <div className="dropdown-trigger d-flex align-items-center"
           onMouseEnter={() => handleMouseEnter('notes')}
           onMouseLeave={handleMouseLeave}>
        <span className="nav-links font-play">Products</span>
      </div>
      <div className={`dropdown-content ${hoveredItem === 'notes' ? 'open' : 'd-none'}`}
           onMouseEnter={() => handleMouseEnter('notes')}
           onMouseLeave={handleMouseLeave}>
        <div className="d-flex align-item-center gap-5">
          <div>
            {services.map((service, index) => (
              <div key={index}>
                <Link
                  to={service.link}
                  className="nav-links font-play dropdown-item text-start"
                  onClick={() => setHoveredItem(null)}
                >
                  <p className="itemsof-dropdown mb-0">{service.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
                <NavLink
                  onMouseEnter={mouseLeaveHandler}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeLink} ${styles.link}`
                      : styles.link
                  }
                  to="/news"
                >
                  Blogs
                </NavLink>
                 <NavLink
                  onMouseEnter={mouseLeaveHandler}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeLink} ${styles.link}`
                      : styles.link
                  }
                  to="/contact"
                >
                  Contact Us
                </NavLink> 
              </div>
              <div className={styles.buttonCont}>
                {/* {!landingPage && 
                  <Link onMouseEnter={mouseLeaveHandler} to="/seo-analysis">
                    <button className={styles.button1}>Login</button>
                  </Link>
                } */}
                {landingPage && 
                  <a onMouseEnter={mouseLeaveHandler}>
                    <button className={styles.button1}>Chat With Us</button>
                  </a>
                }
                <a href="tel: +1-647-860-5083" onMouseEnter={mouseLeaveHandler}>
                  <button className="primary-button">Get In Touch!</button>
                </a>
              </div>
            </div>
          </Container>
          </div>
        </header>
        {/* <Container>
          <div
            onMouseLeave={mouseLeaveHandler}
            style={style}
            className={styles.drop_down}
          >
            <div
              onMouseLeave={mouseLeaveHandler}
              className={styles.drop_downContent}
              style={{
                zIndex: noLinearBackground ? "9999" : "1",
                top: noLinearBackground ? "90px" : "0",
              }}
            >
              <Row>
                <Col lg={8}>
                  <Row style={{ padding: "60px 16px 60px 60px" }}>
                    <Col lg={4}>
                      <div className={styles.listCol}>
                        <h3>Design & Build</h3>
                        {Links1.map((e) => (
                          <NavLink
                            className={({ isActive }) =>
                              isActive
                                ? styles.listColLinkActive
                                : styles.listColLink
                            }
                            to={e.path}
                          >
                            {e.title}
                          </NavLink>
                        ))}
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className={styles.listCol}>
                        <h3>Create & Market</h3>
                        {Links2.map((e) => (
                          <NavLink
                            className={({ isActive }) =>
                              isActive
                                ? styles.listColLinkActive
                                : styles.listColLink
                            }
                            to={e.path}
                          >
                            {e.title}
                          </NavLink>
                        ))}
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className={styles.listCol}>
                        <h3>Automate & Scale</h3>
                        {Links3.map((e) => (
                          <NavLink
                            className={({ isActive }) =>
                              isActive
                                ? styles.listColLinkActive
                                : styles.listColLink
                            }
                            to={e.path}
                          >
                            {e.title}
                          </NavLink>
                        ))}
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={4}>
                  <div className={styles.box}>
                    <div className={styles.head}>
                      <img src="/images/header_rocket.svg" />
                      <h4 className="h2_main">WEBSITE ANALYSIS</h4>
                    </div>
                    <p className="para_main">
                      Looking to see how your Website <br />
                      stacks up?
                      <br />
                      <br /> Get your personalized Website <br />
                      Analysis by one of our SEO <br />
                      Experts!
                    </p>
                    <Link to="/seo-analysis">
                      <button>Login</button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container> */}
        
      </>

      <div className={styles.mobileHeader}>
        <header
          style={{
            width:"100%",
            position: noLinearBackground && "absolute",
            zIndex: 99,   
            backgroundImage:
              noLinearBackground || noLinearBackgroundVideo
                ? "none"
                : "linear-gradient(to right, #1b1b1b , rgb(69, 69, 69))",
          }}
          className="header_cs_1"
        >
          <div className="container menu_cs_1 px-sm-3 px-4  d-flex justify-content-space-between align-content-center ">
            <h1
              className="img_h1_cs1 text-center"
              onClick={() => navitate("/")}
            >
              <img src="/images/Group-2272.svg" className="img-fluid" alt="logo" />
            </h1>
            <div
              className="bars_cs1"
              onClick={() => hamburgerdropdown(selected5)}
            >
              {/* <button
              
                style={{ padding: "0px" }}
                className={selected5 ? `fa solid fa-xmark` : `fa fa-bars`}
              > */}
                <img
                src={`${selected5 ? `/icons/cross-icon.png`: `icons/hamburger-icon.png`}`}
                />
              {/* </button> */}
            </div>
          </div>
        </header>
        <Mobilenav linear={noLinearBackground} landingPage={landingPage} transfer={selected5} hamburgerdropdown={hamburgerdropdown}></Mobilenav>
      </div>
      
      
    </>
  );
};

export default NavbarCS;
