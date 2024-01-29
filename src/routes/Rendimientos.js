const Rendimiento = require("../../models/Rendimiento");

const router = require("express").Router();

//obtener todos los rendimientos
router.get('/', async (req,res)=> {
    const rendimientos = await Rendimiento.findAll()
    res.json(rendimientos);
});

//obtener un rendimiento en especifico
router.get('/:id', async (req,res)=> {
    const { id } = req.params;
    const rendimiento = await Rendimiento.findByPk(id);
    res.json(rendimiento);
});

//crear un rendimiento
router.post('/', async (req,res)=> {
    const { id_inversion, r_date, r_hour, r_amount, r_moneda, r_status} = req.body;

    if(!id_inversion){
        return res.status(400).json({
            error: "Falta id inversion"
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
    const rendimiento = await Rendimiento.create({ id_inversion, r_date, r_hour, r_amount, r_moneda, r_status});
    res.json(rendimiento);
});


module.exports = router;