import React from 'react'
import PropTypes from 'prop-types'
import { PlainText } from './Contact.styled'

const Contact = ({contact, children}) => {
  return (
    <>
        <PlainText>{contact.name}</PlainText>
        <PlainText>{contact.number}</PlainText>
        {children}
    </>
  )
}

Contact.propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
 }

export default Contact