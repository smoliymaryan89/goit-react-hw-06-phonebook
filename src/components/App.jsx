import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';

const App = () => {
  const filter = useSelector(({ filter }) => filter);
  const contacts = useSelector(({ contacts }) => contacts);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filteredContacts} />
    </>
  );
};

export default App;
