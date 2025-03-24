import { useReducer } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import FlashcardsContainer from "./components/flashcards/flashcards";
import "./components/header/header.css";

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [...state, { ...action.payload, id: Date.now() }];
    default:
      return state;
  }
};

function App() {
  const [recipes, dispatch] = useReducer(recipeReducer, []);

  return (
    <div className="app-container">
      <Header />
      <Form dispatch={dispatch} />
      <FlashcardsContainer recipes={recipes} />
      <Footer />
    </div>
  );
}

export default App;
