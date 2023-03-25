import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { Div, Title } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onContactFormSubmit = (newContact, { resetForm }) => {
    const alreadyExist = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (alreadyExist) {
      resetForm();
      return alert(`${newContact.name} is already in contacts`);
    }

    const contact = { id: nanoid(), ...newContact };

    setContacts(prevState => [...prevState, contact]);
    resetForm();
  };

  const FilterContacts = e => {
    setFilter(e.target.value);
  };

  const onDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const normalizedFiler = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFiler)
  );

  return (
    <Div>
      <Title>Phonebook</Title>
      <ContactForm onContactFormSubmit={onContactFormSubmit} />

      <h2>Contacts</h2>
      <Filter filter={filter} OnChange={FilterContacts} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </Div>
  );
}
