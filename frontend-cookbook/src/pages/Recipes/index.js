import './styles.scss';
//import dataRecipes from '../../public/data/recipes'
import RecipeCard from '../../components/recipe-card';
import Header from '../../components/Header';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

const RecipesPage = () => {

    const [dataRecipes, setDataRecipes] = useState([])

    const optionsAxios = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }

    const getAllEvents = () => {
        axios
            .get("http://localhost:3001/recipes", optionsAxios)
            .then((response) => {
                console.log("All the recipes: ", response.data)
                setDataRecipes(() => response.data)
            })
            .catch((error) =>
                console.log("ERREUR : I can't get all the recipes")
            )
    };

    useEffect(() => {
        getAllEvents()
    }, [])

    console.log('DataRecipes : ', dataRecipes)

    return (
        <div className='recipespage_container'>
            <Header />
            <h1>All recipes Page</h1>
            <div className="recipespage_container_list">
                {dataRecipes.map((recipe) => (
                    <Link to={`/recipes/${recipe._id}`} key={recipe.title} ><RecipeCard  {...recipe} /></Link>
                ))}
                {dataRecipes.map((recipe) => (
                    <RecipeCard key={recipe.title} {...recipe} />
                ))}
                {dataRecipes.map((recipe) => (
                    <RecipeCard key={recipe.title} {...recipe} />
                ))}
                {dataRecipes.map((recipe) => (
                    <RecipeCard key={recipe.title} {...recipe} />
                ))}
            </div>
            <Outlet />
        </div>
    );
}

export default RecipesPage; 