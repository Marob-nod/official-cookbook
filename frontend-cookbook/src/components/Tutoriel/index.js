import { Link } from 'react-router-dom'
import ButtonCustom from '../Button-customized'
import './styles.scss'

const Tutorial = () => {

    return (
        <div className="tutorial_container">
            <div className="tutorial_container_content">
                <div className="tutorial_container_content_item_container">
                    <h2 className='tutorial_container_content_item_container_title'>Recipes</h2>
                    <p className='tutorial_container_content_item_container_text'>Browse our recipes in alphabetic order. Among all the recipes, search by name, tags, cooking time for more ideas !</p>
                    <Link to="/recipes"><ButtonCustom name="Search your recipe" className="secondary" /></Link>
                </div>
                <div className="tutorial_container_content_item_container">
                    <h2 className='tutorial_container_content_item_container_title'>Add a recipe</h2>
                    <p className='tutorial_container_content_item_container_text'>Did we forget something ? Add a recipe using our template</p>
                    <Link to="/create-recipe"><ButtonCustom name="Add your own recipe" className="secondary" /></Link>
                </div>
                <div className="tutorial_container_content_item_container">
                    <h2 className='tutorial_container_content_item_container_title'>Profile</h2>
                    <p className='tutorial_container_content_item_container_text'>See your saved recipes to quickly access your favorite meals</p>
                    <Link to="/login"><ButtonCustom name="Create your profile" className="secondary" /></Link>
                </div>
            </div >
        </div >
    )
}

export default Tutorial