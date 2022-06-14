const SearchBox = () => {
    return(
        <> <input ref={inputValueRef} type ="text"> </input> 
        <button onClick = {handleSearchRecipe}> Search Recipe</button>
        </>
       
    )
}

export default SearchBox;