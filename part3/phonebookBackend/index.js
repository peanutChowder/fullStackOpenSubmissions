const express = require('express')
const app = express()

app.use(express.json()) 
app.use(express.static('build'))

const cors = require('cors')
app.use(cors())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const date = new Date();
    response.send(`Phonebook has info for ${persons.length} people<br><p>${date.toLocaleString()}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id != id)

    response.status(204)
    response.send(`Deleted person with id '${id}'`)
})

app.post('/api/persons', (request, response) => {
    const person = request.body

    if (persons.filter(p => p.name.toLowerCase() === person.name.toLowerCase()).length > 0) {
        return response.status(400).json({
            error: "Name already exists in phonebook"
        })
    }

    if (person.name.trim().length === 0 || person.number.trim().length === 0) {
        return response.status(400).json({
            error: "Did not provide a name/number"
        })
    }

    persons = persons.concat(person)

    const personId = Math.floor(Math.random() * 100000);
    person.id = personId
    
    response.json(person) 
})

app.get('/', (request, response) => {
    response.send('<h1>Welcome to the phonebook</h1>')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
