import './styles.scss';
import Header from '../../components/Header';
import ButtonCustom from '../../components/Button-customized';
import { useState } from 'react';
import axios from 'axios'

const CreateRecipe = () => {

    const optionsAxios = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }

    const [titleRecipe, setTitleRecipe] = useState('')
    const [serves, setServes] = useState('')
    const [level, setLevel] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [cookingTime, setCookingTime] = useState(null)
    const [prepTime, setPrepTime] = useState(null)
    const [instructions, setInstructions] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)


    const handleSubmit = (e) => {
        //e.prevent.default()
        setIsSubmitted(true)
        createEvent();
    }

    const createEvent = () => {
        console.log('Le body de la requete create recipe : ', {
            "title": titleRecipe,
            "cookingTime": cookingTime,
            "prepTime": prepTime,
            "serves": serves,
            "level": level,
            "ingredients": ingredients,
            "instructions": instructions,
        })
        axios
            .post(
                "http://localhost:3000/recipes",
                {
                    "title": "recette test",
                    "cookingTime": "2",
                    "prepTime": "20",
                    "serves": "4",
                    "level": "medium",
                    "ingredients": "ingredients",
                    "instructions": "instructions",
                },
                optionsAxios
            )
            .then((response) => {
                console.log("réponse du serveur à ma création de recette :", response)
            })
            .catch((error) => console.log("Error de create event"));
    };

    return (
        <div className='createrecipe_container'>
            <Header />
            <h1 className='title-page'>Proposes nous ta recette</h1>
            <form className='createrecipe_container_form'>
                <h1><input type="text" autoComplete='off' className='form-input' placeholder="Title" value={titleRecipe} onChange={(e) => setTitleRecipe(e.target.value)} /></h1>
                <div>
                    <input className='form-input' placeholder="Cooking Time" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />
                    <input className='form-input' placeholder="Preparation Time" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} />
                    <input className='form-input' placeholder="Number of Serves" value={serves} onChange={(e) => setServes(e.target.value)} />
                    <input className='form-input' placeholder="Level" value={level} onChange={(e) => setLevel(e.target.value)} />
                </div>
                <div>
                    <input className='form-input' placeholder="Image Url" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                    <input className='form-input' placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
                    <input className='form-input' placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
                </div>
                <ButtonCustom name="Submit" className="secondary" handleClick={handleSubmit} />
            </form>
        </div>
    );
}

export default CreateRecipe; 