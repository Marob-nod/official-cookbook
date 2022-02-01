import { useDispatch, useSelector } from 'react-redux';
import './styles.scss'

const TextArea = ({ type, name, placeholder }) => {

    const dispatch = useDispatch()
    const value = useSelector(state => state.recipe[name])

    return (
        <div className="createrecipe_container_form_content_item">
            <textarea
                type={type}
                className='form-input'
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={(event) =>
                    dispatch({
                        type: 'CHANGE_FIELD_CREATE_RECIPE',
                        fieldName: name,
                        value: event.target.value
                    })} />
            <label for={name}>{name}</label>
        </div>
    )
}

export default TextArea;