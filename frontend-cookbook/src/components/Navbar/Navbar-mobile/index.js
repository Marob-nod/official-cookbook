import MenuBookTwoTone from '@mui/icons-material/MenuBookTwoTone';
import './styles.scss'
import { Button, Switch } from '@mui/material';
import { Menu } from '@mui/material';
import { useState } from 'react';
import MobileDrawer from '../../Mobile-drawer';

const NavbarMobile = () => {

    const [toggle, SetToggle] = useState('false')


    return (
        <div className="navbarmobile_container">
            <MenuBookTwoTone />
            <Menu />
            <div
                onClick={() => SetToggle(!toggle)}
                className={toggle ? 'navbarmobile_container_toggle-open' : 'navbarmobile_container_toggle'}>
                |||
            </div>
            <MobileDrawer className={toggle ? "mobiledrawer_container-open" : "mobiledrawer_container"} />
        </div>
    )
}

export default NavbarMobile;