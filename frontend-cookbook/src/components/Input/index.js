import { useDispatch, useSelector } from 'react-redux';
import './styles.scss'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useState } from 'react';


const Input = ({ type, name, placeholder, className, isRequired }) => {

    //const [showWarning, setShowWarning] = useState(false)
    const dispatch = useDispatch()
    const value = useSelector(state => state.recipe[name])
    console.log("Le champ ", name, " a la valeur ", value)
    console.log(className + '-input')

    return (
        <div className={className}>
            <label for={name}>{placeholder.toUpperCase()}</label>
            <div className={`${className}-input`}>
                <EditOutlinedIcon />
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={(event) =>
                        dispatch({
                            type: 'CHANGE_FIELD_CREATE_RECIPE',
                            fieldName: name,
                            value: event.target.value
                        })} />
            </div>
            {isRequired && !value &&
                <div className={`${className}-required`}>This value is required !</div>}
        </div >

    )
}

export default Input;