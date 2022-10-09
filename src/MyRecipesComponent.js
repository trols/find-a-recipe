function MyRecipesComponent({label,image,calories,ingredients,dietLabels}){
    return(
        <div className="container" id="fon">
            <h2>{label}</h2>
            <img src={image}className="card" alt="first"/>
            <p className="calories">{calories.toFixed()} Kcal</p>
            <p>{dietLabels}</p>
            <ul className="container" id="list">
                {ingredients.map(ingredient =>(
                    <li> <img src="https://img.icons8.com/offices/2x/checkmark.png" className="bullit" alt="pict"/>{ingredient}</li>
                
                ))}
                
            </ul>

        </div>
    )
}
export default MyRecipesComponent;