import React, { Component } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = data => {
    data.id = nanoid(5); // уникальний id контакта

    const newContact = data.name.toLowerCase();
    const checkContact = this.state.contacts.some(
      item => item.name.toLowerCase() === newContact
    );

    if (!checkContact) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, data],
      }));
    } else {
      return alert(`${data.name} is already in contacts`);
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId),
    }));
  };

  filterContact = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  getFilterContact() {
    const { contacts, filter } = this.state;
    const filterNorm = filter.toLowerCase();
    const filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filterNorm)
    );
    return filteredContacts;
  }

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <h2
          style={{
            marginTop: 30,
            marginLeft: 40,
          }}
        >
          Phonebook
        </h2>
        <Form onSubmit={this.formSubmit} />
        <h3
          style={{
            marginTop: 20,
            marginLeft: 40,
          }}
        >
          Contacts
        </h3>
        <Filter filter={filter} onSearchContact={this.filterContact} />
        <ContactList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
          filter={filter}
          onFilterContacts={this.getFilterContact()}
        />
      </>
    );
  }
}
