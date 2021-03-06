import { useState, useEffect } from 'react'
import axios from 'axios'

import Book from './components/Book'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const displayedPersons = searchTerm === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() =>{
    console.log('Effect')
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log("Promise Fufilled")
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <Book displayedPeople={displayedPersons}/>
    </div>
  )
}

export default App