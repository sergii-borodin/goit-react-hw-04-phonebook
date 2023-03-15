import React,{ Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { MainContainer } from "./App.styled";

import { nanoid } from 'nanoid'

import initialContacts from '../../data/contacts';

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() { 
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts })
      return
    }
    this.setState({contacts: initialContacts });
    
  }

  componentDidUpdate(prevProps, prevState) { 
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts) );
    }
  } 
  
  addContact = (name, telNumber) => {
    this.setState((prevState) => {
      return {contacts:
        [{id: nanoid(), name: `${name}`, number: `${telNumber}`}, ...prevState.contacts]
      }
    })
  }

  deleteContactById = (id) => {
    const updatedContactList = this.state.contacts.filter(contact => contact.id !== id)
    this.setState({contacts: updatedContactList})
  }

  addFilter = (e) => {
    const searchWord = e.currentTarget.value.toLowerCase();
    this.setState({ filter: searchWord });
  }

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filtredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
    
    return filtredContacts;
  }
  
  render()
  {
    const filtredContacts = this.filterContacts();
return (
    <MainContainer>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.addContact} existedContacts={this.state.contacts} />
      <h2>Contacts</h2>
      <Filter searchByName={this.addFilter} searchWord={this.state.filter} />
      <ContactList contacts={filtredContacts} deleteContactById={this.deleteContactById} />
    </MainContainer>
  );
    }
  
};
