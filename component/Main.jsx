export default function Main() {
  const ingredients = ["chicken", "Tomatoes", "Perrper"];
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
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
        <button>Add Ingredient</button>
      </form>
      <ul>
        {ingredients.map((ing) => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>
    </main>
  );
}
