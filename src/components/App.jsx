import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList'
import Title from './Title/Title';
import Section from './Section/Section';
export default class App extends Component {
  state = {
    contacts: [
      
    ],
    filter: ''
  };
  filterContact = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  handleFilterContact = () => {
    return this.state.contacts.filter(item => {
      return item.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase().trim()) || item.number.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase().trim())
    })
  }

  addContact = (contact) => {
    if (contact.name && contact.number) {
      if (!this.state.contacts.some(({ name }) => name === contact.name)) {
        this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, contact]
          }
        })
      } else {
        alert(`${contact.name} is already in contacts`);
        return;
      }
      
    } else {
      alert('Need add Name or Number')
      return;
    }
    
  }
  deleteContacts = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    })
  }
  render() {
    const filteredContact = this.handleFilterContact()
    return (
      <Section>
        <Title title={'Phonebook'}></Title>
        <ContactForm addContact={this.addContact} />
        <Filter handleChange={this.filterContact} value={this.state.filter} />
        <Title title={'Contacts'}/>
        <ContactList deleteContacts={this.deleteContacts} contacts={filteredContact} />

      </Section>
    )
  }
}

