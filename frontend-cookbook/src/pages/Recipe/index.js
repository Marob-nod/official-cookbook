import './styles.scss';
import { useParams } from "react-router-dom";
import dataRecipes from '../../public/data/recipes'

const RecipePage = () => {

    let params = useParams()
    let currentRecipe = dataRecipes.find(recipe => recipe.slug === params.recipeSlug)
    console.log('currentRecipe : ', currentRecipe)



    return (
        <div className='recipepage_container'>
            <h1>Recipe: {params.recipeSlug}</h1>
            <h2>{currentRecipe.slug}</h2>
        </div>
    );
}
export default RecipePage; 