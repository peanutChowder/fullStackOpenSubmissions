require('dotenv').config()
const express = require('express')
const app = express()
const Person = require('./models/phonebook')

app.use(express.static('build'))
app.use(express.json()) 

const cors = require('cors')
app.use(cors())

app.get('/api/persons', (request, response) => {
    Person.find()
        .then(people => {
            response.json(people)
        })
})

app.get('/info', (request, response) => {
    const date = new Date();

    Person.countDocuments()
        .then(count => {
            response.send(`Phonebook has info for ${count} people<br><p>${date.toLocaleString()}</p>`)
        })
    
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person)
            } else {
                response.status(404).end()
            } 
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
    const person = {
        name: request.body.name,
        number: request.body.number,
        id: request.body.id
    }
    
    Person.findByIdAndUpdate(request.params.id, person, {new: true})
        .then(updatedPerson => {
            console.log(`Updated person ${person.name}`)
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            console.log(`deleted person ${request.params.id}`)
            response.status(204).end()
        })
        .catch(error => next(error))
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
})

app.get('/', (request, response) => {
    response.send('<h1>Welcome to the phonebook</h1>')
})


// Middleware for error handling
unknownEndpoint = (request, response) => {
    response.status(404).send({error: "unknown endpoint"})
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.log(error.message)
    
    if (error.name === "CastError") {
        return response.status(400).send({error: "malformatted id"})
    }

    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
