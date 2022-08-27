import personService from "../services/persons"

const Book = ({displayedPeople, persons, setPersons}) => {
  const deletePerson = (personToDelete) => {    
    const confirmed = window.confirm(`Delete ${personToDelete.name}?`)

    if (!confirmed) {
      return
    }
    const updatedPersons = persons.filter(person => person.id !== personToDelete.id)
    
    console.log(`Deleting person '${personToDelete.name}' with id ${personToDelete.id}`)

    personService.delPerson(personToDelete.id)
    setPersons(updatedPersons)
  }

  console.log(`Current people: ${displayedPeople.map(person => `name: ${person.name}, id: ${person.id} |`)}`)
  return (
    displayedPeople.map(person => 
      <div key={person.id}>
        <span>{person.name} {person.number}</span> 
        <input type="submit" value="delete" onClick={() => deletePerson(person)}></input>
      </div>
    )
  )
}

  export default Book 