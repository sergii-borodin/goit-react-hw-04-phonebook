import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Form , SubmitButton} from './ContactForm.styled'

const ContactForm = ({onFormSubmit, existedContacts}) => {

  const [contactName, setContactName] = useState('');
  const [telNumber, setTelNumber] = useState('');

    const addName = (e) => {
    const newName = e.currentTarget.value;      
      setContactName(newName);
    }
  
    const addTelNumber = (e) => {
      const newTelNumber = e.currentTarget.value;
      setTelNumber(newTelNumber);
    }
  
    const onFormSubmitHandler = (e) => {
      e.preventDefault();
      
      const isAlreadyInContactList = existedContacts.find(contact => contact.name.toLowerCase() === contactName.toLocaleLowerCase());
      
      isAlreadyInContactList ? alert('This contact is already existed') : onFormSubmit(contactName,
        telNumber);
      
      setContactName('');
      setTelNumber('');
}

  return (
      <Form onSubmit={onFormSubmitHandler}>
        <label>
          Name <input
  type="text"
  name="name"
          value={contactName}
  onChange={addName}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </label>
        <label>
          Tel <input
  type="tel"
          name="number"
          value={telNumber}
          onChange={addTelNumber}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
        </label>
        <SubmitButton type="submit">Add Contact</SubmitButton>
      </Form>
    )
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
  existedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
}

export default ContactForm