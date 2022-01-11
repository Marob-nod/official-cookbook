import './styles.scss';
import MenuBookTwoTone from '@mui/icons-material/MenuBookTwoTone';
import { Button, Switch } from '@mui/material';




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
            <ul className="navbar_container_buttons">
                <li><Button variant='outlined' color='primary'>Login</Button></li>
                <li><Button variant='contained' color='primary'>Sign up</Button></li>
                <li><Switch disabled defaultChecked /></li>
                {/* <li><Avatar src="/broken-image.png" /></li> */}
            </ul>

        </div>
    );

}

export default Navbar;