import './styles.scss';
import dataRecipes from '../../data/recipes'
import RecipeCard from '../../components/recipe-card';

const RecipesPage = () => (
    <div className='recipespage_container'>
        <h1>All recipes Page</h1>
        <div className="recipespage_container_list">
            {dataRecipes.map((recipe) => (
                <RecipeCard key={recipe.name} {...recipe} />
            ))}
        </div>
    </div>
);

export default RecipesPage; 