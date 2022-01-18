import './styles.scss';
import ButtonCustom from '../Button-customized';
import bgBanner from '../../public/bg-banner.jpg'

const Banner = () => (
    <div className='banner_container'>
        <img src={bgBanner} alt="banner-picture" />
        <div className="banner_container_description">
            <h1 className='banner_container_description_title'>Marien-Greene Family Cookbook</h1>
            <p className='banner_container_description_text'>Welcome to the Marien and Greene collection of family recipes! <br /><br />Here, we have compiled all of our most loved and cherished family recipes across generations and cultures. Our goal is to collect both our favorite traditional recipes made by our parents and grandparents, as well as new recipes we find and love. </p>
            <ButtonCustom name="Explore our recipes" className="principal" />
        </div>
    </div >
);

export default Banner;