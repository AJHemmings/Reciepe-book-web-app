import React, { useState } from "react";
import "./form.css";
import supabase from "../../utils/supabase";

function Form({ dispatch }) {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      ingredients,
      instructions,
      imgUrl,
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from("recipes")
      .insert([newRecipe])
      .select()
      .single();

    if (error) {
      console.error("Error adding recipe:", error);
      return;
    }

    // Dispatch to update local state
    dispatch({ type: "ADD_RECIPE", payload: data });
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
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
        className="fixed-textarea"
      />
      <textarea
        placeholder="Instructions"
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
