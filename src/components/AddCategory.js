import React from 'react'
import { useState } from 'react'

import  PropTypes from 'prop-types'

export const AddCategory = ({ setcategoria }) => {


  const [inputValue, setinputValue] = useState( '')
  const handleInputChange = (e) => {
    setinputValue(e.target.value)

  }

  const handleSubmit = (e) => {

    e.preventDefault();
    if (inputValue.trim().length > 2) {
      console.log(inputValue)
      
      setcategoria(categ => [inputValue,...categ])
      setinputValue('')
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}

      />
    </form>



  )

  
}

AddCategory.propTypes = {
  setcategoria : PropTypes.func.isRequired
}