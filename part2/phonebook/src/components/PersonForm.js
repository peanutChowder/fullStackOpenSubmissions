import React from 'react';

const PersonForm = ({
        persons,
        setPersons,
        newName, 
        setNewName, 
        newNumber, 
        setNewNumber,
        addPersonToServer,
        updatePerson,
        setDisplayMsg,
        setDisplayType
        }) => {
    const addPerson = (event) => {
        event.preventDefault()

        if (newName.trim().length === 0 || newNumber.trim().length === 0) {
          setDisplayType('error')
          setDisplayMsg(`Cannot leave name/number blank!`)
          return
        }
        
        if (persons.some(person => person.name === newName)) {
          const replace = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
          if (!replace) {
            return
          } else {
            const personEntry = persons.find(entry => entry.name === newName)
            const updatedPersonEntry = {
              ...personEntry,
              number: newNumber
            }

            updatePerson(updatedPersonEntry.id, updatedPersonEntry)
              .then(response => {
                console.log(response)
                setPersons(persons.map(
                  person => {
                    if (person.name === newName) {
                      return updatedPersonEntry
                    } else {
                      return person
                    }
                  })
                )
              })
              .catch(error => {
                setDisplayType('error')
                setDisplayMsg(`Information of ${newName} has already been removed from server!`)
              })
          }
        } else {
          const nameObject = {
            name: newName,
            number: newNumber
          }
    
          
          addPersonToServer(nameObject)
            .then(response => {
              console.log(response)
              setPersons(persons.concat(response))
              setDisplayType('message')
              setDisplayMsg(`Added ${response.name}`)
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