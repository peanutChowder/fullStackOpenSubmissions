require('dotenv').config()
const express = require('express')
const app = express()
const Person = require('./models/phonebook')

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
    Person
        .findById(request.params.id)
        .then(person => {
            response.json(person)
        })
        .catch(error => {
            console.log("Failed to retrieve person by ID")
            response.status(404).end()
        })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id != id)

    response.status(204)
    response.send(`Deleted person with id '${id}'`)
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (body.name.trim().length === 0 || body.number.trim().length === 0) {
        return response.status(400).json({
            error: "Did not provide a name/number"
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
        
    })
    // persons = persons.concat(body)

    // const personId = Math.floor(Math.random() * 100000);
    // body.id = personId
    
    // response.json(body) 
})

app.get('/', (request, response) => {
    response.send('<h1>Welcome to the phonebook</h1>')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
