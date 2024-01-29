const Retiro = require("../../models/Retiro");

const router = require("express").Router();

//obtener todos los retiros
router.get('/', async (req,res)=> {
    const retiros = await Retiro.findAll()
    res.json(retiros);
});

//obtener un retiro en especifico
router.get('/:id', async (req,res)=> {
    const { id } = req.params;
    const retiro = await Retiro.findByPk(id);
    res.json(retiro);
});

//crear un retiro
router.post('/', async (req,res)=> {
    const { id_user, r_date, r_hour, r_amount} = req.body;

    if(!id_user){
        return res.status(400).json({
            error: "Falta id usuario"
        });
    }
    if(!r_date){
        return res.status(400).json({
            error: "Falta Fecha"
        });
    }
    if(!r_hour ){
        return res.status(400).json({
            error: "Falta Hora"
        });
    }
    if(!r_amount){
        return res.status(400).json({
            error: "Falta Monto Maximo "
        });
    }
    if(!r_moneda){
        return res.status(400).json({
            error: "Falta Moneda"
        });
    }
    const retiro = await Retiro.create({ id_user, r_date, r_hour, r_amount});
    res.json(retiro);
});


module.exports = router;