import React from "react";
import Card from "../components/Card";

function Buttons(props) {
  return (
    <div className="Buttons">
      <button className="btnPrev" onClick={props.prevSlide}>
        Previous
      </button>
      <button className="btnEdit">Edit</button>
      <button className="btnDelete" onClick={props.deleteSlide}>
        Delete
      </button>
      <button className="btnNew">New</button>
      <button className="btnNext" onClick={props.nextSlide}>
        Next
      </button>
    </div>
  );
}

export default Buttons;
