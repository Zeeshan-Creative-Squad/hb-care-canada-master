import React, { useEffect, useRef } from "react";
import "./Modal.css";

export default function Modal(props) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (props.status) {
      modalRef.current.classList.add("show");
    } else {
      modalRef.current.classList.remove("show");
    }
  }, [props.status]);

  return (
    <div className="modal-container" ref={modalRef}>
      <div className="overlay" onClick={props.closeModal}></div>
      <div className="modal-main d-flex justify-content-center align-items-center w-fit">
        <img src={props.img} alt="gallery-img" className="img-fluid" />
      </div>
    </div>
  );
}
