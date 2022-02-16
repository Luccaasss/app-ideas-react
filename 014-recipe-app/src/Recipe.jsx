import React, {useState}from 'react'

export default function Recipe(props) {
  const {
    idMeal,
    strMeal,
    strInstructions,
    strMealThumb
  } = props

  const [openRecipe, setOpenRecipe] = useState(false)

  return (
    <div className='recipe-container'>
      <h2>{strMeal}</h2>
      <button
        onClick={() => {
          setOpenRecipe(!openRecipe)
        }}
      >{openRecipe ? 'Close Recipe' : 'Open Recipe'}</button>
      {openRecipe && 
        <ol>
          <li>Id meal: {idMeal}</li>
          <img width='300px' height='300px' src={strMealThumb} alt="meal" />
          <li>Instructions: {strInstructions}</li>
        </ol>
      }
    </div>
  )
}
