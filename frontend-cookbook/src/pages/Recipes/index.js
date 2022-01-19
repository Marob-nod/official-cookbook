import './styles.scss';
import dataRecipes from '../../public/data/recipes'
import RecipeCard from '../../components/recipe-card';
import Header from '../../components/Header';

const RecipesPage = () => (
    <div className='recipespage_container'>
        <Header />
        <h1>All recipes Page</h1>
        <div className="recipespage_container_list">
            {dataRecipes.map((recipe) => (
                <RecipeCard key={recipe.name} {...recipe} />
            ))}
            {dataRecipes.map((recipe) => (
                <RecipeCard key={recipe.name} {...recipe} />
            ))}
            {dataRecipes.map((recipe) => (
                <RecipeCard key={recipe.name} {...recipe} />
            ))}
            {dataRecipes.map((recipe) => (
                <RecipeCard key={recipe.name} {...recipe} />
            ))}
        </div>
    </div>
);

export default RecipesPage; 