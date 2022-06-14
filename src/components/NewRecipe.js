import { useState, useRef} from 'react';
import { ReactDOM } from 'react';


const NewRecipe = ({handleButtonClick}) => {
    const [recipes, setRecipes] = useState({});
      
        const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setRecipes(values => ({...values, [name]: value}))
        }
      
        const handleSubmit = (event) => {
          event.preventDefault();
        }


    return(
        <>
        <h1>Add New Recipe</h1>
        <form>
            <label>
                Cake Name:
                <input 
                    type="text" 
                    name="cakeName" 
                    value={recipes.cakeName || ""} 
                    onChange={handleChange}/>
            </label>

            <br></br>

            <label>
                Ingredients:
                <input 
                    type="text" 
                    name="ingredients"
                    value={recipes.ingredients || ""} 
                    onChange={handleChange}
                 />
            </label>

            <br></br>

            <label>
                Rating:
                <input 
                    type="number" 
                    number="rating" 
                    value={recipes.rating || ""} 
                    onChange={handleChange}/>
            </label>

            <br></br>
            <button onClick={handleButtonClick}>Submit</button>
            
        </form>
        </>
        
    )
}
export default NewRecipe;