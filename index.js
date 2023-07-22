const express = require('express')
const { engine } = require('express-handlebars');
const mongoose = require('mongoose');
const env = require('dotenv')
const homeRoutes = require('./routes/index')
const postersRoutes = require('./routes/posters')
const authRoutes = require('./routes/auth')
env.config()

const app = express()

mongoose.connect(process.env.MONGOURL, {useNewUrlParser: true})
.then(() => console.log("Succes Connected"))
.catch(err => {console.log(err.message);})

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');

//Body parser 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', homeRoutes)
app.use('/posts', postersRoutes)
app.use('/auth', authRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {console.log(`Server started on ${PORT}`);})