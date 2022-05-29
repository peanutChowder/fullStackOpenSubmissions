const PersonForm = ({
        persons,
        setPersons,
        newName, 
        setNewName, 
        newNumber, 
        setNewNumber
        }) => {
    const addPerson = (event) => {
        event.preventDefault()
        
        if (persons.some(person => person.name === newName)) {
          alert(`${newName} is already added to phonebook`)
        } else {
          const nameObject = {
            name: newName,
            number: newNumber
          }
    
          setPersons(persons.concat(nameObject))
        }
        setNewName("")
        setNewNumber("")
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    return (
        <form onSubmit={addPerson}>
            <div>
            name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}


export default PersonForm