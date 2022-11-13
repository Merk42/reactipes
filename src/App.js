import './App.css';
import {useEffect, useState} from 'react';
import Recipe from './Recipe';
import FilterRecipes from './FilterRecipes';

function App() {
  const [selected, setSelected]=useState({});
  const [data, setData]=useState([]);
  const [ingredientFilter, setIngredientFilter] = useState('');
  const filteredRecipes = ingredientFilter === '' ? data : data.filter(cl => cl.ingredients.some(c => c.name === ingredientFilter));
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
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }  
  useEffect(()=>{
    getData()
  },[])

  const updateIngredientFilter = (e) => {
    console.log('data from child', e)
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
     {selected !== {} && <Recipe chosen={selected}/> }
     </main>
    </div>
  );
}

export default App;
