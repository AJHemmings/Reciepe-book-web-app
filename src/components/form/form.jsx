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
    const formData = new FormData(e.target);
    const newRecipe = {
      title: formData.get("title"),
      ingredients: formData.get("ingredients"),
      instructions: formData.get("instructions"),
      imgUrl: formData.get("imgUrl"),
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

  // function Form({ dispatch }) {
  //   const [title, setTitle] = useState("");
  //   const [imgUrl, setImgUrl] = useState("");
  //   const [ingredients, setIngredients] = useState("");
  //   const [instructions, setInstructions] = useState("");

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const newRecipe = { title, imgUrl, ingredients, instructions };

  //     const response = await fetch("http://localhost:5001/recipes", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newRecipe),
  //     });

  //     if (response.ok) {
  //       dispatch({
  //         type: "ADD_RECIPE",
  //         payload: newRecipe,
  //       });

  //       setTitle("");
  //       setIngredients("");
  //       setInstructions("");
  //       setImgUrl("");
  //     }
  //   };

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
