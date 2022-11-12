function Ingredient({ingredient}) {
    return (
        <span>{ingredient.quantity}{ingredient.unit} {ingredient.name}</span>
    )
}

function Ingredients({ingredients}) {
    return (
        <>
        <h2>Ingredients</h2>
        <ul>
        {
         ingredients && ingredients.length>0 && ingredients.map((ingredient)=><li key={ingredient.name.toString()}><Ingredient ingredient={ingredient}/></li>)
       }
       </ul>
       </>
    )
}

function Instructions({instructions}) {
    return (
        <>
        <h2>Instructions</h2>
        <ul>
        {
         instructions && instructions.length>0 && instructions.map((instruction)=><li key={instruction.toString()}>{instruction}</li>)
       }
       </ul>
       </>
    )
}

export default function Recipe({chosen}) {
    return (
        <>
        <h1>{chosen.name}</h1>
        <Ingredients ingredients={chosen.ingredients}/>
        <Instructions instructions={chosen.instructions}/>
        </>
    )
}