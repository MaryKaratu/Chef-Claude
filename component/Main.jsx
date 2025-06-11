import { useState } from "react";

export default function Main() {
  const [ingredient, setIngredient] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredient((prevIngr) => [...prevIngr, newIngredient]);
  }

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button onSubmit={handleSubmit}>Add Ingredient</button>
      </form>
      <ul>
        {ingredient.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
    </main>
  );
}
