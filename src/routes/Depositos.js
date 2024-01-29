const Deposito = require("../../models/Deposito");

const router = require("express").Router();

//obtener todos los depositos
router.get('/', async (req,res)=> {
    const depositos = await Deposito.findAll()
    res.json(depositos);
});

//obtener un deposito en especifico
router.get('/:id', async (req,res)=> {
    const { id } = req.params;
    const deposito = await Deposito.findByPk(id);
    res.json(deposito);
});

//crear un deposito
router.post('/', async (req,res)=> {
    const { id_user, d_date, d_hour, d_amount, d_moneda } = req.body;

    if(!id_user){
        return res.status(400).json({
            error: "Falta Usuario"
        });
    }
    if(!d_date){
        return res.status(400).json({
            error: "Falta Fecha"
        });
    }
    if(!d_hour){
        return res.status(400).json({
            error: "Falta Hora"
        });
    }
    if(!d_amount){
        return res.status(400).json({
            error: "Falta Cantidad"
        });
    }
    if(!d_moneda){
        return res.status(400).json({
            error: "Falta Moneda"
        });
    }
    const deposito = await Deposito.create({ id_user, d_date, d_hour, d_amount, d_moneda });
    res.json(deposito);
});


module.exports = router;