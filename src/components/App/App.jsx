import React, { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { nanoid } from 'nanoid';

import initialContacts from '../../data/contacts';
import { MainContainer } from './App.styled';

// Getting contacts on initial rendering from localStorage or from json
const getInitialContactList = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  }
  return initialContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContactList());
  const [filter, setFilter] = useState('');

  // Saving current state of contacts into localStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, telNumber) => {
    setContacts(prevState => {
      return [
        ...prevState,
        { id: nanoid(), name: `${name}`, number: `${telNumber}` },
      ];
    });
  };

  const deleteContactById = id => {
    const updatedContactList = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContactList);
  };

  const addFilter = e => {
    const searchWord = e.currentTarget.value.toLowerCase();
    setFilter(searchWord);
  };

  const filterContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    return filteredContacts;
  };

  const filteredContacts = filterContacts();

  return (
    <MainContainer>
      <h1>Phone book</h1>
      <ContactForm onFormSubmit={addContact} existedContacts={contacts} />
      <h2>Contacts</h2>
      <Filter searchByName={addFilter} searchWord={filter} />
      <ContactList
        contacts={filteredContacts}
        deleteContactById={deleteContactById}
      />
    </MainContainer>
  );
};
