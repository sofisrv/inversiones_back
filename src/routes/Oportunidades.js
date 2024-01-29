const Oportunidad = require("../../models/Oportunidad");

const router = require("express").Router();

//obtener todos los oportunidades
router.get('/', async (req,res)=> {
    const oportunidades = await Oportunidad.findAll()
    res.json(oportunidades);
});

//obtener un oportunidad en especifico
router.get('/:id', async (req,res)=> {
    const { id } = req.params;
    const oportunidad = await Oportunidad.findByPk(id);
    res.json(oportunidad);
});

//crear un oportunidad
router.post('/', async (req,res)=> {
    const { nombre, descripcion, m_min, m_max, m_rendimiento, m_plazo, m_unidades, m_moneda } = req.body;

    if(!nombre){
        return res.status(400).json({
            error: "Falta Nombre"
        });
    }
    if(!descripcion){
        return res.status(400).json({
            error: "Falta Descripcion"
        });
    }
    if(!m_min ){
        return res.status(400).json({
            error: "Falta Monto Minimo de inversion"
        });
    }
    if(!m_max){
        return res.status(400).json({
            error: "Falta Monto Maximo de inversion"
        });
    }
    if(!m_rendimiento){
        return res.status(400).json({
            error: "Falta Rendimiento"
        });
    }
    if(!m_plazo ){
        return res.status(400).json({
            error: "Falta Plazo Minimo de inversion"
        });
    }
    if(!m_unidades){
        return res.status(400).json({
            error: "Falta Unidades monetarias"
        });
    }
    if(!m_moneda){
        return res.status(400).json({
            error: "Falta Moneda "
        });
    }
    const oportunidad = await Oportunidad.create({ nombre, descripcion, m_min, m_max, m_rendimiento, m_plazo, m_unidades, m_moneda } );
    res.json(oportunidad);
});

module.exports = router;