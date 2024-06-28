import { useState } from "react";
import { Link } from "react-router-dom";
import { Links1, Links2, Links3 } from "../Navigationlinks";
import './Mobilenav.css'

const Mobilenav = (props) => {
  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);

  let transfer = props.transfer;
  const mobiledropdown = (state) => {
    setSelected(!state);
  };
  const mobiledropdown2 = (state) => {
    setSelected2(!state);
    setSelected3(false);
    setSelected4(false);
  };
  const mobiledropdown3 = (state) => {
    setSelected3(!state);
    setSelected2(false);
    setSelected4(false);
  };
  const mobiledropdown4 = (state) => {
    setSelected4(!state);
    setSelected3(false);
    setSelected2(false);
  };

  return (
    <>
      <div
      style={{top: props.linear && "71px", zIndex:"9999999999"}}
        className={
          transfer === true ? "  mobilenav_cs1" : "  mobilenavclicked_cs1"
        }
      >
        <ul>
          <div className={props.landingPage && 'd-none'}>
            <div className="d-flex justify-content-between align-content center navitems_cs1">
              <li style={{ color: "white" }}>
                <Link onClick={() => props.hamburgerdropdown(transfer)} to="/"> Home </Link>
              </li>

              <i
                onClick={() => mobiledropdown(selected)}
                class="fa-solid fa-chevron-up"
                style={{
                  transform:
                    selected === true ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "0.3s",
                  color: selected === true ? "#CB1212" : "white",
                }}
              ></i>
            </div>
            <div
              className={
                selected === true ? "mobsubmenu_cs1 show" : "mobsubmenu_cs1"
              }
            >
              
              <div onClick={() => mobiledropdown2(selected2)}>
                
                <h6 className="d-flex justify-content-between align-content-center">
                  
                  <li
                    style={{ color: selected2 === true ? "#CB1212" : "white" }}
                  >
                    Design & Build{" "}
                  </li>{" "}
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected2 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected2 === true ? "#CB1212" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected2 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  {" "}
                  <ul>
                    {Links1.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>{" "}
              <div onClick={() => mobiledropdown3(selected3)}>
                {" "}
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li
                    style={{ color: selected3 === true ? "#CB1212" : "white" }}
                  >
                    {" "}
                    Create & Market{" "}
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected3 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected3 === true ? "#CB1212" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected3 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1">
                    {Links2.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>{" "}
              <div onClick={() => mobiledropdown4(selected4)}>
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li
                    style={{ color: selected4 === true ? "#CB1212" : "white" }}
                  >
                    {" "}
                    Automate & Scale{" "}
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected4 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected4 === true ? "#CB1212" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected4 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1">
                    {Links3.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={props.landingPage && 'd-none'}>
            <div className="d-flex justify-content-between align-content center navitems_cs1">
              <li>
              <Link onClick={() => props.hamburgerdropdown(transfer)} to="/about"> About </Link>
              </li>
            </div>
          </div>
          <div className={`d-flex justify-content-between align-content center navitems_cs1 ${props.landingPage && 'd-none'}`}>
            
            <li>
              
            <Link onClick={() => props.hamburgerdropdown(transfer)} to="/services"> Services </Link>
            </li>
          </div>
          <div className={`d-flex justify-content-between align-content center navitems_cs1 ${props.landingPage && 'd-none'}`}>
            <li>
            <Link onClick={() => props.hamburgerdropdown(transfer)} to="/product"> Product </Link>
            </li>
          </div>
          <div>
            <div className={`d-flex justify-content-between align-content center navitems_cs1 ${props.landingPage && 'd-none'}`}>
              <li>
              <Link onClick={() => props.hamburgerdropdown(transfer)} to="/blogs"> Blogs </Link>
              </li>
            </div>
            <div className={`d-flex justify-content-between align-content center navitems_cs1 ${props.landingPage && 'd-none'}`}>
              <li>
              <Link onClick={() => props.hamburgerdropdown(transfer)} to="/contact"> Contact Us </Link>
              </li>
            </div>
          </div>
          <div className={`d-flex justify-content-start mobilebtn_cs1 ${props.landingPage && 'd-none'}`}>
            <a
              style={{ width: "70%" }}
              className="button2_cs_1"
              href="tel: +1-647-860-5083"
            >
              <button
                style={{ width: "100%", borderRadius:"50px", padding: "0px 0px" }}
                className="button2_cs_1"
                href=""
              >
                Login
              </button>
              <button
                style={{ width: "100%", borderRadius:"50px", padding: "0px 0px" }}
                className="button2_cs_1"
                href=""
              >
                Signup
              </button>
            </a>
          </div>
          {props.landingPage && 
            <div className={`d-flex justify-content-start mobilebtn_cs1`}>
              <a
                style={{ width: "70%" }}
                className="button2_cs_1" 
              >
                <button
                  style={{ width: "100%", borderRadius:"4px" }}
                  className="button2_cs_1"
                  href=""
                >
                  Chat With Us
                </button>
              </a>
            </div>
          }
          {props.landingPage && 
            <div className={`d-flex justify-content-start mobilebtn_cs1`}>
              <a
                style={{ width: "70%" }}
                className="button2_cs_1"
                href="tel: +1-647-860-5083"
              >
                <button
                  style={{ width: "100%", borderRadius:"4px" }}
                  className="button2_cs_1"
                  href=""
                >
                  Get Started
                </button>
              </a>
            </div>
          }
        </ul>
      </div>
    </>
  );
};

export default Mobilenav;
