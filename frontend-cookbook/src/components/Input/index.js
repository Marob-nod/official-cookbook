import { useDispatch, useSelector } from 'react-redux';
import './styles.scss'

const Input = ({ type, name, placeholder }) => {

    const dispatch = useDispatch()
    const value = useSelector(state => state.recipe[name])

    return (
        <div className="createrecipe_container_form_content_item">
            <input
                type={type}
                className='createrecipe_container_form_form-input'
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={(event) =>
                    dispatch({
                        type: 'CHANGE_FIELD_CREATE_RECIPE',
                        fieldName: name,
                        value: event.target.value
                    })} />

            <label for={name}>{placeholder}</label>
        </div>
    )
}

export default Input;