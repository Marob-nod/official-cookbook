import './styles.scss';
import { UseState } from 'react'

const MobileDrawer = ({ className }) => {


    return (
        <div className={className}>
            <ul className="mobiledrawer_container_list">
                <li>Login</li>
                <li>Sign up</li>
                <li>Home page</li>
                <li>Recipes</li>
                <li>Add a recipe</li>
                <li>Translate</li>
            </ul>
        </div>
    );
}

export default MobileDrawer;