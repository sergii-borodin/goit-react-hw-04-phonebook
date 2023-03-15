import React from 'react'
import PropTypes from 'prop-types'

import { Input } from './Filter.styled'

const Filter = ({searchWord, searchByName}) => {
  return (
      <div>
          <Input
  type="text"
  name="name"
  value={searchWord}
  onChange={searchByName}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder='search name'
          required
        />
    </div>
  )
}

Filter.propTypes = {
    searchWord: PropTypes.string,
    searchByName: PropTypes.func.isRequired,
}

export default Filter