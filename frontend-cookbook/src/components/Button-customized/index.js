import './styles.scss';


const ButtonCustom = ({ name, className }) => {
    return (
        <div className={className}>
            {name}
        </div>
    );
}

export default ButtonCustom;