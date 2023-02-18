const mongoose = require('mongoose')

console.log(process.argv)

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = encodeURI(process.argv[2])



const url =
  `mongodb+srv://jfeng:${password}@cluster0.mswlqhm.mongodb.net/noteApp?retryWrites=true&w=majority`
""

console.log(`[[[[[[[[[[[[[${url}]]]]]]]]]]]]]`)
mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
  asdeffwf: String
})

const Note = mongoose.model('Note', noteSchema)

Note.find({asdeffwf: 12423}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})