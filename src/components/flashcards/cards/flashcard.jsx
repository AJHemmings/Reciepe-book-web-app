import React, { useState } from "react";
import "./flashcard.css";
import backImage from "../../../../public/assets/wood-background.jpg";

function Flashcard({ title, ingredients, instructions, img }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`flashcard ${isFlipped ? "flipped" : ""} ${
        isClicked ? "clicked" : ""
      }`}
      onClick={handleClick}
    >
      <div className="flashcard-front">
        <img src={img} alt={title} className="card-image" />
        <span className="flashcard-text">{title}</span>
      </div>
      <div className="flashcard-back">
        <img
          src={backImage}
          alt="background chopping board"
          className="card-image"
        />

        <span className="flashcard-text">
          <h1>{title}</h1>
          <h3 id="Ingredients "> Ingredients:</h3>
          <ul id="ingredients-list">
            {ingredients.split(", ").map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <ul id="instructions-list">
            {Array.isArray(instructions) ? (
              instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))
            ) : (
              <li>{instructions}</li>
            )}
          </ul>
        </span>
      </div>
    </div>
  );
}

export default Flashcard;
