import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Flashcard from "./cards/flashcard";
import "./flashcards.css";
import supabase from "../../utils/supabase";

function FlashcardsContainer({ recipes }) {
  const initialCards = [];
  const [allCards, setAllCards] = useState([...initialCards]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recipes from Supabase
        const { data, error } = await supabase
          .from("recipes")
          .select("id, title, imgUrl, ingredients, instructions");

        if (error) {
          throw error;
        }

        setAllCards([...initialCards, ...data]);
      } catch (error) {
        console.error("Error fetching data from Supabase:", error.message);
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
