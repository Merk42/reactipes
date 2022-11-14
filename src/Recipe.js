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
            <ul>
                {
                    ingredients && ingredients.length > 0 && ingredients.map((ingredient) => <li key={ingredient.id}><IngredientDetail ingredient={ingredient} /></li>)
                }
            </ul>
        </>
    )
}

function IngredientSection({ingredientsection}) {
    return (
        <>
            <h2>Ingredients</h2>
            {ingredientsection.map((section) => <div key={section.id}><h3>{section.name}</h3><Ingredients ingredients={section.ingredients}/></div>)}
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
            <Ingredients ingredients={chosen.ingredients}/>
            { chosen.ingredientsection ?
            <IngredientSection ingredientsection={chosen.ingredientsection}/>
            : null }
            <Instructions instructions={chosen.instructions} />
        </>
    )
}