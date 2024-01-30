const Inversionista = require("../../models/Inversionista");
const bcryptjs = require('bcryptjs');
const router = require("express").Router();

//obtener todos los inversionistas
router.get('/', async (req,res)=> {
    const inversionistas = await Inversionista.findAll()
    res.json(inversionistas);
});

//obtener un inversionista en especifico
router.get('/:id', async (req,res)=> {
    const { id} = req.params;
    const inversionista = await Inversionista.findByPk(id);
    res.json(inversionista);
});

//crear un inversionista
router.post('/', async (req,res)=> {
    const name = req.body.name;
    const a_p = req.body.a_p;
    const a_m = req.body.a_m;
    const email = req.body.email;
    const b_date = req.body.b_date;
    const pass = req.body.password;
    const rfc = req.body.rfc;
    let password = await bcryptjs.hash(pass, 8); //encriptando la contrase;a
    console.log(password);

    if(!name){
        return res.status(400).json({
            error: "Falta Nombre"
        });
    }
    if(!a_p){
        return res.status(400).json({
            error: "Falta Apellido Paterno"
        });
    }
    if(!a_m ){
        return res.status(400).json({
            error: "Falta Apellido Materno"
        });
    }
    if(!email){
        return res.status(400).json({
            error: "Falta Email"
        });
    }
    if(!b_date){
        return res.status(400).json({
            error: "Falta Fecha de cumplea;os"
        });
    }
    if(!password){
        return res.status(400).json({
            error: "Falta Password"
        });
    }
    if(!rfc){
        return res.status(400).json({
            error: "Falta RFC"
        });
    }
    const inversionista = await Inversionista.create({ name, a_p, a_m, email, b_date, password, rfc });
    res.json(inversionista);
});


module.exports = router;