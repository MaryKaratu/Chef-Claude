import { useState } from "react";
import ClaudeRecipe from "./claudeRecipe";
import IngredientList from "./ingredientList";

export default function Main() {
  const [ingredients, setIngredient] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredient((prevIngr) => [...prevIngr, newIngredient]);
  }

  function toggleRecipeShown() {
    setRecipeShown((prev) => !prev);
  }

  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      {ingredients.length > 0 ? (
        <IngredientList
          ingredient={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      ) : null}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
