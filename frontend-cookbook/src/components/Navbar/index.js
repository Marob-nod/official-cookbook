import './styles.scss';
import MenuBookTwoTone from '@mui/icons-material/MenuBookTwoTone';
import { Avatar, Switch } from '@mui/material';

const Navbar = () => {
    return (
        <div className='navbar_container'>
            <MenuBookTwoTone />
            <ul className="navbar_container_links">
                <li>Home</li>
                <li>All recipes</li>
                <li>Add a recipe</li>
                <li>Profile</li>
            </ul>
            <div className="navbar_container_buttons">
                <Switch disabled defaultChecked />
                <Avatar src="/broken-image.png" />
            </div>

        </div>
    );

}

export default Navbar;