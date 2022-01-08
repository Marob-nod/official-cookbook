import './styles.scss';
import TextField from '@mui/material/TextField'

const CreateRecipe = () => (
    <div className='createrecipe_container'>
        <h1 className='title-page'>Proposes nous ta recette</h1>
        <form className='createrecipe_container_form' action="">
            <TextField className="form-items" label="Titre de la recette" variant="outlined" />
            <TextField className="form-items" label="Cooking Time" variant="outlined" />
            <TextField className="form-items" label="Preparation Time" variant="outlined" />
            <TextField className="form-items" label="Image" variant="outlined" />
        </form>
    </div>
);

export default CreateRecipe; 