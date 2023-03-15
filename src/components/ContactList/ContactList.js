import React from 'react'
import Contact from './Contact/Contact'
import PropTypes from 'prop-types'
import { ContactListContainer, ContactItem, Button } from './ContactList.styled'

const ContactList = ({contacts, deleteContactById}) => {
  return (
    <ContactListContainer>
      {contacts.map(contact => <ContactItem key={contact.id}>
        <Contact contact={ contact} deleteContactById={deleteContactById}>
        <Button onClick={() => deleteContactById(contact.id)}>Delete</Button></Contact>
      </ContactItem>)}
    </ContactListContainer>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContactById: PropTypes.func.isRequired,
}

export default ContactList