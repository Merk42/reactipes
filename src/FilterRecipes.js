import {useState} from 'react';

export default function FilterRecipes(props) {
    const [ingredientFilter, setIngredientFilter] = useState('');
    function handleIngredientFilterChange(e) {
        setIngredientFilter(e.target.value); // is this redundant?
        props.myProp(e.target.value);
    }
    return (
        <>
        <label for="ingredient-filter">Filter by ingredient</label>
        <input type="text" id="ingredient-filter" list="ingredients" placeholder='chicken' value={ingredientFilter} onChange={handleIngredientFilterChange}/>
        <datalist id="ingredients">
            /* update value with IDs */
            <option value="chicken"></option>
            <option value="bell pepper"></option>
            <option value="onion"></option>
            <option value="black pepper"></option>
            <option value="chili powder"></option>
            <option value="salt"></option>
            <option value="cumin"></option>
            <option value="lime juice"></option>
            <option value="flour tortilla"></option>
            <option value="cremini mushroom"></option>
            <option value="spaghetti"></option>
        </datalist>
        </>
    )
}