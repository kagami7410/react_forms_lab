import { useState, useRef} from 'react';
import RecipeList from '../components/RecipeList';
import Recipe from '../components/Recipe';
import NewRecipe from '../components/NewRecipe';


const RecipeContainer = () => {
    const inputValueRef = useRef()
    const [recipes, setRecipes] = useState (
        [
            {
                cakeName: "Lemon Drizzle",
                ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
                rating: 5
            },
            {
                cakeName: "Tea Loaf",
                ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
                rating: 3
            },
            {
                cakeName: "Brownie",
                ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
                rating: 4
            },
            {
                cakeName: "Carrot Cake",
                ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
                rating: 5
            }
          ])

          const searchRecipe = () =>{
              const cake = inputValueRef.current.value;
              
          }

          const addNewRecipe = () => {
            console.log("new recipe added!");
            const newRecipe={
                cakeName:"Coffee Cake",
                ingredients: ["coffee", "eggs", "flour", "butter", "walnuts"],
                rating:"10"
            }
            const updatedRecipes = [...recipes, newRecipe]
            {setRecipes(updatedRecipes)}
        }

          return (
            <>
                <h1>Recipe Container</h1>
                <NewRecipe handleButtonClick={addNewRecipe} />
                <RecipeList recipes={recipes}/>
            </>
            
        );
}

export default RecipeContainer;