

const RecipeContainer = () => {
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
          const addNewRecipe = () => {
            console.log("new member added!");
            const newMember={
                cakeName:"Coffee Cake",
                ingredients: ["coffee", "eggs", "flour", "butter", "walnuts"],
                rating:"10"
            }
            const updatedMembers = [...members, newMember]
            if (applicationsOpen){setMembers(updatedMembers)}
            
        }

          return (
            <>
                <h1>Recipe Container</h1>
                <NewMember handleButtonClick={addNewRecipe} />
                <UpdateStatus 
                        applicationsOpen={applicationsOpen} 
                        handleClick={updateApplicationsOpen}/>
                <MemberList members={members}/>
            </>
            
        );
        }
