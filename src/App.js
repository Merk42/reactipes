import './App.css';
import {useEffect, useState} from 'react';
import Recipe from './Recipe';


function App() {
  const [selected, setSelected]=useState({});
  const [data,setData]=useState([]);
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

  return (
    <div className="App">
      <aside>
      <ul>
      {
       data && data.length>0 && data.map((item, index)=><li key={item.name.toString()} onClick={() => setSelected(data[index])}>{item.name}</li>)
     }
     </ul>
     </aside>
     <main>
     <Recipe chosen={selected}/>
     </main>
    </div>
  );
}

export default App;
