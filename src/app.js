import express from "express";
import db from './utils/database.js';
import User from './models/users.model.js'
import "dotenv/config";



User;
//Variable de entorno llamada PORT
const PORT = process.env.PORT ?? 5000;

//Probamos conexion con la base de datos
db.authenticate()
    .then(() => {
        console.log('DB Conectada')
    })
    .catch(error => console.log(error))

db.sync()
    .then(() => { console.log('Base Sincronizada') })
    .catch(error => console.log(error))

const app = express();

app.use(express.json());

//Health Check
app.get('/', (req, res) => {
    res.send('OK')
});

//Create User
//Cuando se haga una request a /Users Post crear un usuario
// * INSERT INTO users (username,email,password)
app.post('/users', async (req, res) => {
    try {
        const { body } = req;
        //Mandar esta info a la base de datos
        const user = await User.create(body);
        res.status(201).json(user);

    } catch (error) {
        res.status(400).json(error)

    }
});

//READ Users 
//GEt /users => devolver un json con todos los usuarios en la base de datos.
// * SELECT * FROM users;
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(400).json(error);

    }
})

//SELECT * FROM users WHERE id=4;
//GET /users/:id
//? Como mandamos el id en este GET, ya que en un GET no se puede mandar informacion
//Path Params - Query Params


app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params; //Params es un objeto {id : 4 }
        const user = await User.findByPk(id);
        res.json(user);
    } catch (error) {
        res.status(400).json(error);

    }
})

//UPDATE .... WHERE id = 5;
//PUT '/users' => path params
//PATCH '/users/update' => query params se combinan los dos
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        //Priomer objeto es la info
        //Segundo objeto es el WHERE
        const user = await User.update(body,{
            where : {id}
        });
        res.json(user);
    } catch (error) {
        res.status(400).json(error);
    }
})

app.delete('/users/:id' , async(req,res)=>{
    try {
        const {id} = req.params;

        await User.destroy({
            where:{id}
        })
        res.status(204).end();
    } catch (error) {
        res.status(400).json(error);
    }
})





app.listen(PORT, () => {
    console.log(`Running Server in Port : ${PORT}`)
})
