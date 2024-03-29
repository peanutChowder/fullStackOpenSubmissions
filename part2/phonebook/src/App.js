import React from 'react';
import { useState, useEffect } from 'react'

import './index.css'
import Book from './components/Book'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [displayMsg, setDisplayMsg] = useState('')
  const [displayType, setDisplayType] = useState('message')

  const displayedPersons = searchTerm === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() =>{
    console.log('Effect')
    personService.getAll()
      .then(data => {
        console.log("Promise Fufilled")
        setPersons(data)
      })
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={displayMsg} displayType={displayType}/>
      <Filter setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <h2>add a new</h2>
      <PersonForm persons={persons} 
        setPersons={setPersons} 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber}
        addPersonToServer={personService.create}
        updatePerson={personService.update}
        setDisplayMsg={setDisplayMsg}
        setDisplayType={setDisplayType}/>
      <h2>Numbers</h2>
      <Book displayedPeople={displayedPersons} persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App