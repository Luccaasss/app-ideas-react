import Recipe from "./Recipe";
import useAxiosFetch from "./hooks/useAxiosFetch";
import './style/global-style.css'

function App() {
  const {data} = useAxiosFetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
  
  return (
    <div className="App">
      <h1>Recipe App</h1>
      {data && data.meals.map(meals => (
        <Recipe
          key={meals.idMeal} 
          idMeal={meals.idMeal}
          strMeal={meals.strMeal}
          strInstructions={meals.strInstructions}
          strMealThumb={meals.strMealThumb}
        />
      ))}
    </div>
  );
}

export default App;
