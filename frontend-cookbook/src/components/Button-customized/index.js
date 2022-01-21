import './styles.scss';


const ButtonCustom = ({ name, className, handleClick }) => {
    return (
        <div className={className} onClick={handleClick}>
            {name}
        </div>
    );
}

export default ButtonCustom;