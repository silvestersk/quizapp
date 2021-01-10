import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Johanna from './pages/Johanna';
import { Sahana, SahanaMaths, SahanaEnglish, SahanaScience } from './pages/Sahana';
import signout from './pages/Signout';


const initialFormState = { name: '', description: '' }

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
  }

  return (
  <Router>
      <Sidebar />
      <Switch>
        <Route path='/Johanna' exact component={Johanna} />
        <Route path='/Sahana' exact component={Sahana} />
        <Route path='/Sahana/Maths' exact component={SahanaMaths} />
        <Route path='/reports/reports2' exact component={SahanaScience} />
        <Route path='/reports/reports3' exact component={SahanaEnglish} />
        <Route path='/signout' exact component={signout} />
      </Switch>
   </Router>
    
  );
}

export default withAuthenticator(App);
