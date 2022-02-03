import './styles.scss';
import Header from '../../components/Header';
import ButtonCustom from '../../components/Button-customized';
import { useDispatch, useSelector } from 'react-redux'
import { changeIngredients, changeLevel, createRecipe } from '../../Redux/actions/recipe';
import Input from '../../components/Input/index';
import TextArea from '../../components/TextArea';

const CreateRecipe = () => {

    const dispatch = useDispatch()
    const ingredients = useSelector(state => state.recipe.ingredients)
    const instructions = useSelector(state => state.recipe.instructions)

    const handleSubmit = () => {
        const ingredientsArray = ingredients.split(', ')
        const instructionsArray = instructions.split(', ')
        dispatch({ type: 'CREATE_RECIPE', ingredientsArray, instructionsArray })
    }


    // const createEvent = () => {
    //     console.log('Le body de la requete create recipe : ', {
    //         "title": titleRecipe,
    //         "cookingTime": cookingTime,
    //         "prepTime": prepTime,
    //         "serves": serves,
    //         "level": level,
    //         "ingredients": ingredients,
    //         "instructions": instructions,
    //         "imgUrl": imgUrl
    //     })
    //     axios
    //         .post(
    //             "http://localhost:3001/recipes",
    //             {
    //                 "title": titleRecipe,
    //                 "cookingTime": cookingTime,
    //                 "prepTime": prepTime,
    //                 "serves": serves,
    //                 "level": level,
    //                 "ingredients": ingredients,
    //                 "instructions": instructions,
    //                 "imgUrl": imgUrl
    //             },
    //             optionsAxios
    //         )
    //         .then((response) => {
    //             console.log("réponse du serveur à ma création de recette :", response)
    //         })
    //         .catch((error) => console.log("Error de create event"));
    // };

    return (
        <div className='createrecipe_container'>
            <Header />
            <div className="createrecipe_container_box">
                <h1 className='title-page'>Proposes nous ta recette</h1>
                <form className='createrecipe_container_form' onSubmit={handleSubmit}>
                    <h1><Input type='text' name='titleRecipe' placeholder='Title of your recipe' className="primary_field" isRequired={true} /></h1>

                    <div className='createrecipe_container_form_content'>
                        <Input type='number' name='cookingTime' placeholder='Cooking Time' className="primary_field" isRequired={true} />
                        <Input type='number' name='prepTime' placeholder='Preparation Time' className="primary_field" isRequired={true} />
                        <Input type='number' name='serves' placeholder='Serves' className="primary_field" isRequired={true} />
                        <div className='createrecipe_container_form_form-input_level'>
                            <p>Select a level for your recipe</p>
                            <div className='createrecipe_container_form_form-input_level-easy'>
                                <input type="radio" name="level" id="levelChoice1" className='form-input' value="easy" onChange={(e) => dispatch(changeLevel(e.target.value))} />
                                <label for="levelChoice1">Easy</label>
                            </div>
                            <div className='createrecipe_container_form_form-input_level-medium'>
                                <input type="radio" name="level" id="levelChoice2" className='form-input' value="medium" onChange={(e) => dispatch(changeLevel(e.target.value))} />
                                <label for="levelChoice2">Medium</label>
                            </div>
                            <div className='createrecipe_container_form_form-input_level-hard'>
                                <input type="radio" name="level" id="levelChoice3" className='form-input' value="hard" onChange={(e) => dispatch(changeLevel(e.target.value))} />
                                <label for="levelChoice3">Hard</label>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Input type='url' name='imgUrl' placeholder='Url of the picture of your recipe' className="primary_field" isRequired={true} />
                        <TextArea type='text' name='ingredients' placeholder="Separated by a comma: milk, butter, letuce, ..." />
                        <TextArea type='text' name='instructions' placeholder="Separated by a comma: mix the vegetables, keep 1h in the fridge, ..." />
                    </div>
                    <button type="submit">Submit the form</button>
                </form>
            </div>
        </div>
    );
}

export default CreateRecipe; 