import React from 'react';
import { ToastContainer } from 'react-toastify';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';


export const App = () => {

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
