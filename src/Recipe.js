function IngredientDetail({ ingredient, ingredientMap }) {
    let name = ingredientMap[ingredient.id].singular
    if (ingredient.quantity && !ingredient.unit && ingredient.quantity > 1) {
        if (ingredientMap[ingredient.id].plural) {
            name = ingredientMap[ingredient.id].plural
        }   
    }
    return (
        <span>{ingredient.quantity}{ingredient.unit} {name}</span>
    )
}

function Ingredients({ ingredients, ingredientMap }) {
    return (
        <>
            <h2>Ingredients</h2>
            <ul>
                {
                    ingredients && ingredients.length > 0 && ingredients.map((ingredient) => <li key={ingredient.id}><IngredientDetail ingredient={ingredient} ingredientMap={ingredientMap} /></li>)
                }
            </ul>
        </>
    )
}

function Instructions({ instructions }) {
    return (
        <>
            <h2>Instructions</h2>
            <ol>
                {
                    instructions && instructions.length > 0 && instructions.map((instruction) => <li key={instruction.toString()}>{instruction}</li>)
                }
            </ol>
        </>
    )
}

export default function Recipe({ chosen, ingredientMap }) {
    return (
        <>
            <h1>{chosen.name}</h1>
            <Ingredients ingredients={chosen.ingredients} ingredientMap={ingredientMap} />
            <Instructions instructions={chosen.instructions} />
        </>
    )
}