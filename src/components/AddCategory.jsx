import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 2) return;

        onNewCategory(inputValue.trim());
    
        setInputValue('');
    }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
    
        <input 
            type="text" 
            value={inputValue}
            placeholder="Buscar gif"
            onChange={ (event) => onInputChange(event) }
        />
    
    </form>
  )
}
