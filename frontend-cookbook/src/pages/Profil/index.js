import Header from '../../components/Header';
import Input from '../../components/Input';
import './styles.scss';

const ProfilPage = () => (
    <div className='profilpage_container'>
        <Header />
        <h1>Profil Page</h1>
        <Input name='titleRecipe' type="text" className="primary_field" placeholder="Title" isRequired={true} />
    </div>
);

export default ProfilPage; 