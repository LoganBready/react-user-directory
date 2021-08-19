import React, { useState } from "react";
import data from "../data";
import Buttons from "./Buttons";

function Card() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide !== data.length - 1) {
      setSlide(slide + 1);
    }
  };
  const prevSlide = () => {
    if (slide !== 0) {
      setSlide(slide - 1);
    }
  };
  const deleteSlide = () => {
    data.splice(slide, 1);
    if (slide >= 0) {
      setSlide(slide + 1);
    }
    if (slide - 1 === data.length) {
      setSlide(slide - 1);
    }
  };
  return (
    <div className="card">
      <div className="number">
        <h3>
          {slide + 1}/{data.length}
        </h3>
      </div>
      <div className="name">
        <h1>
          {data[slide].name.first} {data[slide].name.last}
        </h1>
      </div>
      <div className="from">
        <h2>
          From: {data[slide].city}, {data[slide].country}
        </h2>
      </div>
      <div className="jobTitle">
        <h2>Job Title: {data[slide].title}</h2>
      </div>
      <div className="employer">
        <h2>Employer: {data[slide].employer}</h2>
      </div>
      <div className="favoriteMovies">
        <h2>Favorite Movies:</h2>
        <ol>
          <li>1. {data[slide].favoriteMovies[0]}</li>
          <li>2. {data[slide].favoriteMovies[1]}</li>
          <li>3. {data[slide].favoriteMovies[2]}</li>
        </ol>
      </div>
      <Buttons
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        deleteSlide={deleteSlide}
      />
    </div>
  );
}

export default Card;
