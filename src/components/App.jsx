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
    console.log(data);

    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));

    // this.setState(prevState => ({
    //   contacts: prevState.contacts.map(item => {
    //     console.log(data.name);
    //     // return item.name !== data.name && [...prevState.contacts, data];
    //   }),
    // }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContact = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  getFilterContact() {
    const { contacts, filter } = this.state;
    const filterNorm = filter.toLowerCase();
    const filteredArr = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNorm)
    );
    console.log(filteredArr);
    return filteredArr;
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
