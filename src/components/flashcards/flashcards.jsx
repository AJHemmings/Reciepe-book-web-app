import React, { useState, useEffect } from "react";
import Flashcard from "./cards/flashcard";
import "./flashcards.css";

function FlashcardsContainer({ recipes }) {
  const initialCards = [];

  const [allCards, setAllCards] = useState([...initialCards]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/recipes");
        const data = await response.json();
        setAllCards([...initialCards, ...data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (recipes.length > 0) {
      setAllCards([...initialCards, ...recipes]);
    }
  }, [recipes]);

  return (
    <div className="cardContainer">
      {allCards.map((card) => (
        <Flashcard
          key={card.id}
          img={card.imgUrl}
          id={card.id}
          title={card.title}
          ingredients={card.ingredients}
          instructions={card.instructions}
        />
      ))}
    </div>
  );
}

export default FlashcardsContainer;
