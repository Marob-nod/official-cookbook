import './styles.scss';
import { useParams } from "react-router-dom";
import dataRecipes from '../../public/data/recipes'
import Header from '../../components/Header'

const RecipePage = () => {

    let params = useParams()
    let currentRecipe = dataRecipes.find(recipe => recipe.slug === params.recipeSlug)
    console.log('currentRecipe : ', currentRecipe)



    return (
        <div className='recipepage_container'>
            <Header />
            <h1>{currentRecipe.name}</h1>
            <ul className="recipepage_container_specifications">
                <li className="recipepage_container_specifications_item">{currentRecipe.cookTime}</li>
                <li className="recipepage_container_specifications_item">{currentRecipe.prepTime}</li>
                <li className="recipepage_container_specifications_item">{currentRecipe.serves}</li>
                <li className="recipepage_container_specifications_item">{currentRecipe.level}</li>
            </ul>
            <ul className="recipepage_container_ingredients">
                {currentRecipe.ingredients.map((ingredient, index) => (
                    <li className="recipepage_container_ingredients_ingredient" key={index}>{ingredient}</li>
                ))}
            </ul>
            <ul className="recipepage_container_instructions">
                {currentRecipe.instructions.map((instruction, index) => (
                    <li className="recipepage_container_instructions_instruction" key={index}>{instruction.text}</li>
                ))}
            </ul>
        </div>
    );
}
export default RecipePage; 