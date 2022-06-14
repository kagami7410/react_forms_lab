
const NewRecipe = ({handleButtonClick}) => {



    return(
        <>
        <h1>Add New Recipe</h1>
        <form>
            <label>
                Cake Name:
                <input type="text" name="cake-name" />
            </label>

            <br></br>

            <label>
                Ingredients:
                <input type="text" name="ingredients" />
            </label>

            <br></br>

            <label>
                Rating:
                <input type="text" name="rating" />
            </label>

            <br></br>
            <button onClick={handleButtonClick}>Submit</button>
            
</form>
        </>
        
    )
}
export default NewRecipe;