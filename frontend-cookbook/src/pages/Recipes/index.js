import './styles.scss';
import dataRecipes from '../../public/data/recipes'
import RecipeCard from '../../components/recipe-card';
import Header from '../../components/Header';
import { Link, Outlet } from 'react-router-dom';
import RecipePage from '../Recipe';

const RecipesPage = () => (
    <div className='recipespage_container'>
        <Header />
        <h1>All recipes Page</h1>
        <div className="recipespage_container_list">
            {dataRecipes.map((recipe) => (
                <Link to={`/recipes/${recipe.slug}`} key={recipe.name}><RecipeCard  {...recipe} /></Link>
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
        <Outlet />
    </div>
);

export default RecipesPage; 