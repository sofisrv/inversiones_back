const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const depositos = require("./routes/depositos");
const oportunidades = require("./routes/oportunidades");
const inversionistas = require("./routes/inversionistas");
const inversiones = require("./routes/inversiones");
const retiros = require("./routes/retiros");
const rendimientos = require("./routes/rendimientos");
const authToken = require("./routes/authToken");

const db = require("../db/database");
const app = express();
const port = process.env.PORT || 3030;

(async ()=>{
    try {
        await db.authenticate();
        await db.sync();
        console.log("Conectado a la base de datos");
    } catch (error) {
        throw new Error(error)
    }
    
})() 

//middleware
app.use(express.json());// recibir informacion
app.use(cors());//permitir que otras apps realicen consultas

app.use('/depositos',depositos);
app.use('/oportunidades',oportunidades);
app.use('/inversionistas',inversionistas);
app.use('/inversiones',inversiones);
app.use('/retiros',retiros);
app.use('/rendimientos',rendimientos);
app.use('/authToken',authToken);

app.listen(port, ()=> {
    console.log("servidor ejecutandose en el puerto", port);
});