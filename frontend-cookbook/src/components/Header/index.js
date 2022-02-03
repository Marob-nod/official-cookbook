import { Fragment } from 'react';
import NavbarDesktop from '../Navbar/Navbar-desktop';
import './styles.scss';
import Media from 'react-media';
import NavbarMobile from '../Navbar/Navbar-mobile';

const Header = () => {
    return (

        <div className="header_container">
            <Media queries={{
                small: "(max-width: 750px)",
                large: "(min-width: 751px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <NavbarMobile />}
                        {matches.large && <NavbarDesktop />}
                    </Fragment>
                )}
            </Media>
        </div>

    )
}

export default Header;