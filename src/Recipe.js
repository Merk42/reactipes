function IngredientDetail({ ingredient }) {
    const INGREDIENTMAP = JSON.parse(sessionStorage.getItem("ingredients"));
    let name = ''
    if (INGREDIENTMAP) {
        name = INGREDIENTMAP[ingredient.id].singular;
        if (ingredient.quantity && !ingredient.unit && ingredient.quantity > 1) {
            if (INGREDIENTMAP[ingredient.id].plural) {
                name = INGREDIENTMAP[ingredient.id].plural
            }   
        }
    }
    return (
        <span>{ingredient.quantity}{ingredient.unit} {name}</span>
    )
}

function Ingredients({ ingredients }) {
    return (
        <>
            <h2>Ingredients</h2>
            <ul>
                {
                    ingredients && ingredients.length > 0 && ingredients.map((ingredient) => <li key={ingredient.id}><IngredientDetail ingredient={ingredient} /></li>)
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

export default function Recipe({ chosen }) {
    return (
        <>
            <h1>{chosen.name}</h1>
            <Ingredients ingredients={chosen.ingredients} />
            <Instructions instructions={chosen.instructions} />
        </>
    )
}