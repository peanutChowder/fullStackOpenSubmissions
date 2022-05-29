const Book = ({displayedPeople}) => (
    displayedPeople.map(person => 
      <div key={person.name}>{person.name} {person.number}</div>
    )
  )

  export default Book 