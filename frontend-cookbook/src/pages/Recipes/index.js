import './styles.scss';
import RecipeCard from '../../components/recipe-card';
import Header from '../../components/Header';
import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../../Redux/actions/recipe';

const RecipesPage = () => {

    const allRecipes = useSelector((state) => state.recipe.allRecipes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllRecipes())
    }, [])

    return (
        <div className='recipespage_container'>
            <Header />
            <h1>All recipes Page</h1>
            <div className="recipespage_container_list">
                {allRecipes.map((recipe) => (
                    <Link to={`/recipes/${recipe._id}`} key={recipe.title} ><RecipeCard  {...recipe} /></Link>
                ))}
                {allRecipes.map((recipe) => (
                    <RecipeCard key={recipe.title} {...recipe} />
                ))}
                {allRecipes.map((recipe) => (
                    <RecipeCard key={recipe.title} {...recipe} />
                ))}
                {allRecipes.map((recipe) => (
                    <RecipeCard key={recipe.title} {...recipe} />
                ))}
            </div>
            <Outlet />
        </div>
    );
}

export default RecipesPage; 