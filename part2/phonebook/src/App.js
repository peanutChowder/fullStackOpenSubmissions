import { useState } from 'react'
import Book from './components/Book'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
    { name: 'Dan Abramov', number: '12-43-234345', id: 3},
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const displayedPersons = searchTerm === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))


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