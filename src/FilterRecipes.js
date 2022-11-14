import {useState} from 'react';

export default function FilterRecipes(props) {
    const [ingredientFilter, setIngredientFilter] = useState('');
    function handleIngredientFilterChange(e) {
        setIngredientFilter(e.target.value); // is this redundant?
        props.myProp(e.target.value);
    }
    const ingredientMap = JSON.parse(sessionStorage.getItem("ingredients"));
    return (
        <>
        <label htmlFor="ingredient-filter">Filter by ingredient</label>
        <input type="text" id="ingredient-filter" list="ingredients" placeholder='chicken' value={ingredientFilter} onChange={handleIngredientFilterChange}/>
        <datalist id="ingredients">
            /* update value with IDs */
            <option value="0">chicken</option>
            <option value="1">bell pepper</option>
            <option value="2">onion</option>
            <option value="3">black pepper</option>
            <option value="4">chili powder</option>
            <option value="5">salt</option>
            <option value="6">cumin</option>
            <option value="7">lime juice</option>
            <option value="8">flour tortilla</option>
            <option value="9">cremini mushroom</option>
            <option value="10">spaghetti</option>
        </datalist>
        </>
    )
}