import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './contactsForm';
import Filter from './filter';
import ContactList from './contactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount = () => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  createContact = data => {
    const exist = [...this.state.contacts].some(item => item.name === data.name);
    if (!exist) {
      this.setState(prev => ({
        contacts: [...prev.contacts, { id: nanoid(), ...data }],
      }));
    } else {
      alert(`${data.name} is already in contacts`);
    }
  };

  removeContact = e => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== e.target.id),
    }));
  };

  render() {
    const filterNormalized = this.state.filter.toLowerCase();
    const filtered = [...this.state.contacts].filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );

    return (
      <>
        <h2>Phonebook</h2>
        <ContactsForm getData={this.createContact}></ContactsForm>

        <h2>Contacts</h2>
        <Filter onFilterChange={this.onFilterChange} filter={this.state.filter}></Filter>
        <ContactList filtered={filtered} removeContact={this.removeContact} />
      </>
    );
  }
}

export default App;
