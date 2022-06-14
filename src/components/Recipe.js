const Recipe = ({recipe}) => {

    return(
        <div className="recipe-card">
            <h3>{recipe.cakeName}</h3>
            <h3>{recipe.ingredients}</h3>
            <h3>{recipe.rating}</h3>
            <hr />
        </div>
    )

}

export default Recipe;