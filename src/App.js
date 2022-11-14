import './App.css';
import {useEffect, useState} from 'react';
import Recipe from './Recipe';
import FilterRecipes from './FilterRecipes';

function App() {
  const [selected, setSelected]=useState({});
  const [data, setData]=useState([]);
  const [ingredientFilter, setIngredientFilter] = useState('');
  const filteredRecipes = ingredientFilter === '' ? data.recipes : data.recipes.filter(cl => cl.ingredients.some(c => c.id === ingredientFilter));
  const ingredientMap = data.ingredients;
  const getData=()=>{
    fetch('recipes.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        // var item_value = sessionStorage.getItem("item_key");
        sessionStorage.setItem("recipes", JSON.stringify(myJson.recipes));
        sessionStorage.setItem("ingredients", JSON.stringify(myJson.ingredients));
        setData(myJson)
      });
  }  
  useEffect(()=>{
    getData()
  },[])

  const updateIngredientFilter = (e) => {
    setIngredientFilter(e);
  }
  return (
    <div className="App">
      <aside>
        <FilterRecipes myProp={updateIngredientFilter}></FilterRecipes>
      <ul>
      {
       filteredRecipes && filteredRecipes.length>0 && filteredRecipes.map((item, index)=><li key={item.name.toString()} onClick={() => setSelected(filteredRecipes[index])}>{item.name}</li>)
     }
     </ul>
     </aside>
     <main>
     {selected !== {} ? <Recipe chosen={selected} ingredientMap={ingredientMap}/> : null}
     </main>
    </div>
  );
}

export default App;
