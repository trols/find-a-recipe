
import './App.css';
import { useEffect,useState} from 'react';
import MyRecipesComponent from './MyRecipesComponent';


function App() {

  const MY_ID="360a2540";
  const MY_KEY="5e1c76e58c810fd3c0ad656e1d79e606";
  const[myRecipes,setMyRecipes]=useState([]);
  const[mySearch,setMySearch]=useState('');
  const[wordSubmitted,setWordSubmitted]=useState('banana')

  useEffect(()=>{
const getMyRecipe=async()=>{
  const response=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
  const data=await response.json();
  console.log(response);
  console.log(data.hits);
  setMyRecipes(data.hits);
}
getMyRecipe()},[wordSubmitted])

const finalSearch = (e)=>{
e.preventDefault();
setWordSubmitted(mySearch);
}

  const myRecipeSearch =(e)=>{
    console.log(e.target.value)
    setMySearch(e.target.value)
  }
  return(
    <div className='App'>
       
        <div className='container'>
      <h1>Find a Recipe</h1>
 
  <img src="https://img.freepik.com/premium-photo/a-white-plate-with-salad-and-floating-in-the-air-ingredients-olives-lettuce-onion-tomato-mozzarella-cheese-parsley-basil-and-olive-oil_120795-595.jpg?size=626&ext=jpg&ga=GA1.2.1287222821.1659992797"width="380px"className='photo' alt="to"/>
        
<div className='twoitem'>
  <form onSubmit={finalSearch}>
        <input  className="search" placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
        </input>
      </form>
    

     <button><img src="https://img.icons8.com/bubbles/2x/search.png" className='icon' onClick={ finalSearch } alt="final"/></button>
      
     </div>
{myRecipes.map(element=>(
<MyRecipesComponent label={element.recipe.label}
                  image={element.recipe.image}
                  calories={element.recipe.calories}
                  ingredients={element.recipe.ingredientLines}
                  dietLabels={element.recipe.dietLabels}
                  />

))}

</div>

     </div>
  )
}
export default App;
