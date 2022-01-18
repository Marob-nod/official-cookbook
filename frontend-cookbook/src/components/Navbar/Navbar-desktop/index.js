import './styles.scss';
import MenuBookTwoTone from '@mui/icons-material/MenuBookTwoTone';
import { Button, Switch } from '@mui/material';

const NavbarDesktop = () => {
    return (
        <div className='navbar_container'>
            <MenuBookTwoTone />
            <ul className="navbar_container_links">
                <li className='example'><span className="hover hover-1">Home</span></li>
                <li className='example'><span className="hover hover-1">All recipes</span></li>
                <li className='example'><span className="hover hover-1">Add a recipe</span></li>
                <li className='example'><span className="hover hover-1">Profile</span></li>
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

export default NavbarDesktop;