import './styles.scss';
import MenuBookTwoTone from '@mui/icons-material/MenuBookTwoTone';
import { Button, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import ButtonCustom from '../../Button-customized';

const NavbarDesktop = () => {
    return (
        <div className='navbar_container'>
            <Link to="/"><MenuBookTwoTone /></Link>
            <ul className="navbar_container_links">
                <Link to="/"><li className='example'><span className="hover hover-1">Home</span></li></Link>
                <Link to="/recipes"><li className='example'><span className="hover hover-1">All recipes</span></li></Link>
                <Link to="/create-recipe"><li className='example'><span className="hover hover-1">Add a recipe</span></li></Link>
                <Link to="/profil"><li className='example'><span className="hover hover-1">Profile</span></li></Link>
            </ul>
            <ul className="navbar_container_buttons">
                <Link to="/login"><li><ButtonCustom name="Login" className="secondary" /></li></Link>
                <Link to="/signup"><li><ButtonCustom name="Sign up" className="secondary" /></li></Link>
                <li><Switch disabled defaultChecked /></li>
                {/* <li><Avatar src="/broken-image.png" /></li> */}
            </ul>

        </div>
    );

}

export default NavbarDesktop;