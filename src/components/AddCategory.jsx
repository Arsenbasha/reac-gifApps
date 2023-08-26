import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [InputValue, setInputValue] = useState('')
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }
    const onsubmit = (event)  =>{
        event.preventDefault()
        if(InputValue.trim().length<=1) return;
        //setCategories(categories=>[...categories, InputValuåe])
        onNewCategory(InputValue.trim())
        setInputValue('')

    }
    return (

        <form onSubmit={onsubmit}>

            <input type="text" placeholder="Buscar"
                value={InputValue}
                onChange={onInputChange} />
        </form>

    )
}


