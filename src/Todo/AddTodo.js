import React, {useState} from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
   const [value, setValue] = useState(defaultValue) 
   
   return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)  
    },
    clear: () => setValue(''),
    value: () => value
   }
}

function AddTodo({ onCreate }) {
  const input = useInputValue('')
  

  function SubmitHandler(event) {
    event.preventDefault()

    if (input.value().trim()) {
       onCreate(input.value) 
//       setValue('')
    }
  }

  return (
     <form style={{marginBottom: '1rem' }} onSubmit={onSubmitHandler}>
         <input {...input}/>
         <button type='submit'>Add todo</button>
     </form> 
  )  
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo

59