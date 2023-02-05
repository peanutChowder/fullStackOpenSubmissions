const mongoose = require('mongoose')

if (process.argv.length < 3 || process.argv.length > 5) {
    console.log("Run structure must be 3 or 5 arguments")
}

const password = process.argv[2]
const url = `mongodb+srv://jfeng:${password}@cluster0.mswlqhm.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
    Person
        .find({})
        .then(result => {
            result.forEach(person => {
                console.log(person)
            })
            mongoose.connection.close()
        })

} else if (process.argv.length === 5) {
    person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })

    person
        .save()
        .then(result => {
            console.log("New person added")
            mongoose.connection.close()
        })
}