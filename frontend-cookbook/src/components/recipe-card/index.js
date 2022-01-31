import './styles.scss'
import Equalizer from '@mui/icons-material/Equalizer'
import AccessAlarm from '@mui/icons-material/AccessAlarm'


const RecipeCard = ({ title, imgUrl, description, level, cookingTime }) => (
    <div className='recipecard_container'>
        <img src={imgUrl} alt={title} />
        <div className="recipecard_container_infos">
            <h2>{title.toLowerCase()}</h2>
            <p>{description}</p>
        </div>
        <div className="recipecard_container_specifications">
            <div className="recipecard_container_specifications_level">
                <Equalizer />
                <div className='recipecard_container_specifications_level_name'>{level}</div>
            </div>
            <div className="recipecard_container_specifications_cookingtime">
                <AccessAlarm />
                <div className='recipecard_container_specifications_cookingtime_name'>{cookingTime} min</div>
            </div>
        </div>
    </div>
);

export default RecipeCard;