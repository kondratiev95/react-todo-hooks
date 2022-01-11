export const EditInput = ({ newValue, value, onInput, onBlur, onInputKeyPress}) => {
    return (
        <li className="edit-item">
            <input 
                type="text" 
                className="input-edit"
                value={newValue}
                placeholder={value}
                onChange={onInput}
                onBlur={onBlur}
                onKeyDown={onInputKeyPress}
                autoFocus
            />
        </li>
    )
}