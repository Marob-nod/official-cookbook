import './styles.scss';
import TextField from '@mui/material/TextField'
import Header from '../../components/Header';
import ButtonCustom from '../../components/Button-customized';

const CreateRecipe = () => (
    <div className='createrecipe_container'>
        <Header />
        <h1 className='title-page'>Proposes nous ta recette</h1>
        <form className='createrecipe_container_form' action="">
            <TextField className="form-items" label="Titre de la recette" variant="outlined" />
            <TextField className="form-items" label="Cooking Time" variant="outlined" />
            <TextField className="form-items" label="Preparation Time" variant="outlined" />
            <TextField className="form-items" label="Image" variant="outlined" />
            <TextField className="form-items" label="Instructions" variant="outlined" />
            <TextField className="form-items" label="Ingredients" variant="outlined" />
            <ButtonCustom name="Submit" className="secondary" />
        </form>
    </div>
);

export default CreateRecipe; 