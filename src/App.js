
import './App.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import Favourite from './pages/Favourite';

import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const contactsFromServer = await fetchContacts();
      setContacts(contactsFromServer);
    };
    getContacts();
  }, []);

  const fetchContacts = async () => {
    const getContact = await fetch(process.env.REACT_APP_APIURL);
    const getData = await getContact.json();
    return getData.data;
  }

  const formData = async (data) => {
    const addData = await fetch(process.env.REACT_APP_APIURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const newData = await addData.json();
    if (addData.status === 201) {
      setContacts([...contacts, newData.data])
    }
  };

  const toggleFav = async (id) => {
    const favToggle = await fetch(`${process.env.REACT_APP_APIURL}${id}`, {
      method: 'PUT'
    })
    if (favToggle.status === 201) {
      const toggledContacts = contacts.map((contact => {
        return (id === contact._id) ? { ...contact, fav: !contact.fav } : contact
      }));
      setContacts(toggledContacts);
    }
  };

  const deleteContact = async (id) => {
    const delContact = await fetch(`${process.env.REACT_APP_APIURL}${id}`, {
      method: 'DELETE'
    });
    if (delContact.status === 200) {
      let updatedContacts = contacts.filter(contact => contact._id !== id)
      setContacts(updatedContacts);
    }
  };

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home formData={formData} contacts={contacts} toggleFav={toggleFav} deleteContact={deleteContact} />} />
          <Route path='/favourite' element={<Favourite contacts={contacts} toggleFav={toggleFav} deleteContact={deleteContact} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
