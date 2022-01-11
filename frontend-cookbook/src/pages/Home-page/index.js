import { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import './styles.scss';
import Media from 'react-media';
import MobileDrawer from '../../components/Mobile-drawer';

const HomePage = () => (
    <div className='homepage_container'>
        <Media queries={{
            small: "(max-width: 750px)",
            large: "(min-width: 751px)"
        }}>
            {matches => (
                <Fragment>
                    {matches.small && <MobileDrawer />}
                    {matches.large && <Navbar />}
                </Fragment>
            )}
        </Media>
        <h1>HomePage</h1>
    </div>
);

export default HomePage; 