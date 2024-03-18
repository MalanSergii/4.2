import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './contactsForm';
import Filter from './filter';
import ContactList from './contactList';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const exist = localStorage.getItem('contacts');
    console.log(exist);
    if (exist) {
      return JSON.parse(exist);
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const createContact = data => {
    const exist = [...contacts].some(item => item.name === data.name);
    if (!exist) {
      setContacts([...contacts, { id: nanoid(), ...data }]);
    } else {
      alert(`${data.name} is already in contacts`);
    }
  };

  const removeContact = e => {
    setContacts(contacts.filter(contact => contact.id !== e.target.id));
  };

  const filterNormalized = filter.toLowerCase();
  const filtered = [...contacts].filter(contact =>
    contact.name.toLowerCase().includes(filterNormalized)
  );

  return (
    <>
      <h2>Phonebook</h2>
      <ContactsForm getData={createContact}></ContactsForm>
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter onFilterChange={onFilterChange} filter={filter}></Filter>
          <ContactList filtered={filtered} removeContact={removeContact} />
        </>
      ) : (
        <p>No contacts in your book yet</p>
      )}
    </>
  );
};

export default App;
