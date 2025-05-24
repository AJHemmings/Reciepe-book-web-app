import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import FlashcardsContainer from "./components/flashcards/flashcards";
import "./components/header/header.css";
import supabase from "./utils/supabase";

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [...state, { ...action.payload, id: Date.now() }];
    case "SET_RECIPES":
      return action.payload;
    default:
      return state;
  }
};

function App() {
  const [recipes, dispatch] = useReducer(recipeReducer, []);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const { data: recipes, error } = await supabase
          .from("recipes")
          .select("*");
        if (error) {
          console.error("Error fetching recipes:", error);
          return;
        }
        if (recipes && recipes.length > 0) {
          dispatch({ type: "SET_RECIPES", payload: recipes });
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <div className="form-toggle">
          <button onClick={() => setShowForm((prev) => !prev)}>
            {showForm ? "Close Form" : "Add Recipe"}
          </button>
          {showForm && <Form dispatch={dispatch} />}
        </div>
      </div>
      <FlashcardsContainer recipes={recipes} />
      <Footer />
    </div>
  );
}

export default App;
