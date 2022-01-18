import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Tutorial from "../../components/Tutoriel";
import { StickyNav } from 'react-js-stickynav'


const HomePage = () => {

    const style = () => {
        return (
            <style jsx>{`
            .nav {
              transition: all 0.1s linear;
              position: fixed;
              z-index: 2000;
              width: 100%;
              background: #ffffff;
            }
            .scrollNav {
              transition: all 0.5s ease-in;
              z-index: 2000;
              background: #ffffff;
              width: 100%;
            }
          `}</style>
        )
    }

    return (
        <div className='homepage_container'>
            {style()}
            <StickyNav length='40'><Header /></StickyNav>
            <Banner />
            <Tutorial />
            <Tutorial />
            <Tutorial />

        </div>
    );
}

export default HomePage; 