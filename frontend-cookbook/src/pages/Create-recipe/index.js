import './styles.scss';
import Header from '../../components/Header';
import ButtonCustom from '../../components/Button-customized';
import { useState } from 'react';
import axios from 'axios'

const CreateRecipe = () => {

    const imgUrlDefault = 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    const optionsAxios = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }

    const [titleRecipe, setTitleRecipe] = useState('')
    const [serves, setServes] = useState('')
    const [level, setLevel] = useState('')
    const [imgUrl, setImgUrl] = useState(imgUrlDefault)
    const [cookingTime, setCookingTime] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const [instructions, setInstructions] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = () => {
        setIsSubmitted(true)
        createEvent();
    }

    const handleChangeInstructions = (e) => {
        setInstructions(e.target.value)
        const arr = e.target.value.split(', ')
        console.log('Array recup : ', arr)
    }

    const handleChangeIngredients = (e) => {
        setIngredients(e.target.value)
        const arr = e.target.value.split(', ')
        console.log('Array recup : ', arr)
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
            "imgUrl": imgUrl
        })
        axios
            .post(
                "http://localhost:3001/recipes",
                {
                    "title": titleRecipe,
                    "cookingTime": cookingTime,
                    "prepTime": prepTime,
                    "serves": serves,
                    "level": level,
                    "ingredients": ingredients,
                    "instructions": instructions,
                    "imgUrl": imgUrl
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
            <div className="createrecipe_container_box">
                <h1 className='title-page'>Proposes nous ta recette</h1>
                <form className='createrecipe_container_form'>
                    <label for="title">Title of the Recipe</label>
                    <h1><input type="text" autoComplete='off' name='title' className='form-input' placeholder="Title" value={titleRecipe} onChange={(e) => setTitleRecipe(e.target.value)} /></h1>

                    <div className='createrecipe_container_form_content'>
                        <div className="createrecipe_container_form_content_item">
                            <input type="number" className='createrecipe_container_form_form-input' placeholder="Cooking Time" name='cookingTime' value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />
                            <label for="cookingTime">Cooking Time</label>
                        </div>
                        <div className="createrecipe_container_form_content_item">
                            <input type="number" className='createrecipe_container_form_form-input' placeholder="Preparation Time" name='prepTime' value={prepTime} onChange={(e) => setPrepTime(e.target.value)} />
                            <label for="prepTime">Preparation Time</label>
                        </div>
                        <div className="createrecipe_container_form_content_item">
                            <input type="number" className='createrecipe_container_form_form-input' placeholder="Number of Serves" name='serves' value={serves} onChange={(e) => setServes(e.target.value)} />
                            <label for="serves">Serves</label>
                        </div>
                        <div className='createrecipe_container_form_form-input_level'>
                            <p>Select a level for your recipe</p>
                            <div className='createrecipe_container_form_form-input_level-easy'>
                                <input type="radio" name="level" id="levelChoice1" className='form-input' value="easy" onChange={(e) => setLevel(e.target.value)} />
                                <label for="levelChoice1">Easy</label>
                            </div>
                            <div className='createrecipe_container_form_form-input_level-medium'>
                                <input type="radio" name="level" id="levelChoice2" className='form-input' value="medium" onChange={(e) => setLevel(e.target.value)} />
                                <label for="levelChoice2">Medium</label>
                            </div>
                            <div className='createrecipe_container_form_form-input_level-hard'>
                                <input type="radio" name="level" id="levelChoice3" className='form-input' value="hard" onChange={(e) => setLevel(e.target.value)} />
                                <label for="levelChoice3">Hard</label>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="createrecipe_container_form_content_item">
                            <input type="url" className='form-input' placeholder="Image Url" name='imgUrl' value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                            <label for="imgUrl">Url link of the recipe picture</label>
                        </div>
                        <div className="createrecipe_container_form_content_item">
                            <textarea type="text" className='form-input' placeholder="Separated by a comma: mix the vegetables, keep 1h in the fridge, ..." name='instructions' value={instructions} onChange={handleChangeInstructions} />
                            <label for="instructions">Instructions</label>
                        </div>
                        <div className="createrecipe_container_form_content_item">
                            <textarea type="text" className='form-input' placeholder="Separated by a comma: milk, butter, letuce, ..." value={ingredients} name='ingredients' onChange={handleChangeIngredients} />
                            <label for="ingredients">Ingredients</label>
                        </div>
                    </div>
                    <ButtonCustom name="Submit" className="secondary" handleClick={handleSubmit} />
                </form>
            </div>
        </div>
    );
}

export default CreateRecipe; 