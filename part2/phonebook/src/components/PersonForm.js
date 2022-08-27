
const PersonForm = ({
        persons,
        setPersons,
        newName, 
        setNewName, 
        newNumber, 
        setNewNumber,
        addPersonToServer
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
    
          
          addPersonToServer(nameObject)
            .then(response => {
              console.log(response)
              setPersons(persons.concat(response))
            })
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