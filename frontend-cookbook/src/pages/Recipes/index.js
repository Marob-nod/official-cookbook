import './styles.scss';
import dataRecipes from '../../public/data/recipes'
import RecipeCard from '../../components/recipe-card';
import Navbar from '../../components/Navbar/Navbar-desktop';

const RecipesPage = () => (
    <div className='recipespage_container'>
        <Navbar />
        <h1>All recipes Page</h1>
        <div className="recipespage_container_list">
            {dataRecipes.map((recipe) => (
                <RecipeCard key={recipe.name} {...recipe} />
            ))}
        </div>
    </div>
);

export default RecipesPage; 