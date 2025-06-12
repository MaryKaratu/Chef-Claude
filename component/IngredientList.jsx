export default function IngredientList(props) {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {props.ingredient.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      {props.ingredient.length > 3 ? (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.toggleRecipeShown}>Get a recipe</button>
        </div>
      ) : null}
    </section>
  );
}
