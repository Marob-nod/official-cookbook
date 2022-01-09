import './styles.scss'
import Equalizer from '@mui/icons-material/Equalizer'
import AccessAlarm from '@mui/icons-material/AccessAlarm'


const RecipeCard = ({ name, imgUrl, description, level, cookTime }) => (
    <div className='recipecard_container'>
        <img src={imgUrl} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="recipecard_container_specifications">
            <div className="recipecard_container_specifications_level">
                <Equalizer />
                <span>{level}</span>
            </div>
            <div className="recipecard_container_specifications_cookingtime">
                <AccessAlarm />
                <span>{cookTime}</span>
            </div>
        </div>
    </div>
);

export default RecipeCard;