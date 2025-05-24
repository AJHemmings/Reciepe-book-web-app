import React, { useState } from "react";
import "./form.css";
import supabase from "../../utils/supabase";
import { logError } from "../../utils/logError";

function Form({ dispatch }) {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const processedIngredients = ingredients
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item.length > 0)
      .join(", ");

    const newRecipe = {
      title,
      ingredients: processedIngredients,
      instructions: instructions
        .split("\n")
        .filter((step) => step.trim() !== ""),
      imgUrl,
    };

    try {
      const { data, error } = await supabase
        .from("recipes")
        .insert([newRecipe])
        .select()
        .single();

      if (error) {
        console.error("Error adding recipe:", error.message);
        console.log("Recipe data that caused error:", newRecipe);
        await logError(
          "Add Recipe - supabase insert",
          error.message,
          newRecipe
        );
        return;
      }

      dispatch({ type: "ADD_RECIPE", payload: data });

      setTitle("");
      setImgUrl("");
      setIngredients("");
      setInstructions("");
    } catch (err) {
      console.error("Unexpected error during recipe submission:", err.message);
      console.log("Failing recipe object:", newRecipe);
      await logError("Failing recipe object:", newRecipe);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="title-entry"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
        required
        className="title-entry"
      />
      <textarea
        placeholder="Ingredients - Enter one ingredient per line."
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
        className="fixed-textarea"
      />
      <textarea
        placeholder="Instructions - Enter one instruction per line."
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
        className="fixed-textarea"
      />
      <div className="button-container">
        <button type="submit" role="button">
          Add Recipe
        </button>
      </div>
    </form>
  );
}

export default Form;
