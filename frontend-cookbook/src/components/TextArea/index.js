import { useDispatch, useSelector } from 'react-redux';
import './styles.scss'

const TextArea = ({ type, name, placeholder }) => {

    const dispatch = useDispatch()
    const value = useSelector(state => state.recipe[name])

    const handlechange = (event) => {
        console.log("Le champ ", name, " a la valeur ", value)
        dispatch({
            type: 'CHANGE_FIELD_INSTRUCTIONS_INGREDIENTS',
            fieldName: name,
            value: event.target.value
        })
    }
    return (
        <div className="createrecipe_container_form_content_item">
            <textarea
                type={type}
                className='form-input'
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handlechange} />
            <label for={name}>{name}</label>
        </div>
    )
}

export default TextArea;