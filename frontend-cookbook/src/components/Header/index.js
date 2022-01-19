import { Fragment } from 'react';
import NavbarDesktop from '../Navbar/Navbar-desktop';
import './styles.scss';
import Media from 'react-media';
import NavbarMobile from '../Navbar/Navbar-mobile';
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'


const Header = () => {

    const style = () => {
        return (
            <style jsx>{`

            
            .nav {
              transition: all 0.1s linear;
              position: fixed;
              z-index: 2000;
              padding: 20px;
              background: #ffffff;
            }
            .scrollNav {
              transition: all 0.5s ease-in;
              z-index: 2000;
              background: #ffffff;
              width: 100%;
              border-bottom: 1px solid #dddddd;
            }
            .styl {
              padding-top: 0px;
            }
          `}</style>
        )
    }

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