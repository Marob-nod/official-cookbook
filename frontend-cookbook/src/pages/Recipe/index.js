import './styles.scss';
import { useParams } from "react-router-dom";
import dataRecipes from '../../public/data/recipes'

const RecipePage = () => {

    console.log(dataRecipes)
    let params = useParams()
    console.log('params : ', params)
    let currentRecipe = dataRecipes[0]
    console.log('currentRecipe : ', currentRecipe)

    return (
        <div className='recipepage_container'>
            <h1>Recipe: {params.recipeSlug}</h1>
            <h2>{currentRecipe.cookTime}</h2>
        </div>
    );
}
export default RecipePage; 