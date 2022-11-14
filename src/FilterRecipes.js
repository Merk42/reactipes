import {useState} from 'react';

export default function FilterRecipes(props) {
    const [ingredientFilter, setIngredientFilter] = useState('');
    function handleIngredientFilterChange(e) {
        setIngredientFilter(e.target.value); // is this redundant?
        props.myProp(e.target.value);
    }
    const ingredientMap = JSON.parse(sessionStorage.getItem("ingredients"));
    let INGARR = []
    if (ingredientMap) {
        INGARR = Object.keys(ingredientMap).map((key) => ({"id": key, "name": ingredientMap[key].singular}));
        INGARR.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }
    return (
        <>
        <label htmlFor="ingredient-filter">Filter by ingredient</label>
        <input type="text" id="ingredient-filter" list="ingredients" placeholder='chicken' value={ingredientFilter} onChange={handleIngredientFilterChange}/>
        <datalist id="ingredients">
            { INGARR.map((ingredient)=><option value={ingredient.id} key={ingredient.id}>{ingredient.name}</option>) }
        </datalist>
        </>
    )
}