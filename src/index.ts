import express from 'express'
const app = express()
import userRoutes from './routes/user';
import addressRoutes from './routes/address'
import database from './database'

database.authenticate()
.then(async () => {
    try {
        await database.sync();
        console.log("Conectado ao banco de dados")
    } catch (error) {
        console.log(error);
    }
}).catch((err: any) => {
    console.log(err)
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(userRoutes)
app.use(addressRoutes)

app.listen(4000)