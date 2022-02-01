import './styles.scss';
import Header from '../../components/Header';
import ButtonCustom from '../../components/Button-customized';
import { useDispatch, useSelector } from 'react-redux'
import { changeCookingTime, changeImgUrl, changeIngredients, changeInstructions, changeLevel, changePrepTime, changeServes, changeTitleRecipe, CHANGE_TITLERECIPE, createRecipe } from '../../Redux/actions/recipe';
import { Input } from '@mui/material';
import TextArea from '../../components/TextArea';

const CreateRecipe = () => {

    const dispatch = useDispatch()
    const titleRecipe = useSelector(state => state.recipe.titleRecipe)
    const optionsAxios = useSelector(state => state.common.optionsAxios)
    const serves = useSelector(state => state.recipe.serves)
    const level = useSelector(state => state.recipe.level)
    const imgUrl = useSelector(state => state.recipe.imgUrl)
    const cookingTime = useSelector(state => state.recipe.cookingTime)
    const prepTime = useSelector(state => state.recipe.prepTime)
    const instructions = useSelector(state => state.recipe.instructions)
    const ingredients = useSelector(state => state.recipe.ingredients)

    const handleSubmit = () => {
        dispatch(createRecipe())
    }

    const handleChangeInstructions = (e) => {
        const arr = e.target.value.split(', ')
        console.log('Array recup : ', arr)
        dispatch(changeInstructions(arr))
    }

    const handleChangeIngredients = (e) => {
        const arr = e.target.value.split(', ')
        console.log('Array recup : ', arr)
        dispatch(changeIngredients(arr))
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
                <form className='createrecipe_container_form'>
                    <h1><Input type='text' name='titleRecipe' placeholder='Title of your recipe' /></h1>

                    <div className='createrecipe_container_form_content'>
                        <Input type='number' name='cookingTime' placeholder='Cooking Time' />
                        <Input type='number' name='prepTime' placeholder='Preparation Time' />
                        <Input type='number' name='serves' placeholder='Serves' />
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
                        <Input type='Number' name='imgUrl' placeholder='Url of the picture of your recipe' />
                        <TextArea type='text' name='ingredients' placeholder="Separated by a comma: milk, butter, letuce, ..." />
                        <TextArea type='text' name='instructions' placeholder="Separated by a comma: mix the vegetables, keep 1h in the fridge, ..." />
                    </div>
                    <ButtonCustom name="Submit" className="secondary" handleClick={handleSubmit} />
                </form>
            </div>
        </div>
    );
}

export default CreateRecipe; 