const Inversion = require("../../models/Inversion");

const router = require("express").Router();

//obtener todos los inversions
router.get('/', async (req,res)=> {
    const inversions = await Inversion.findAll()
    res.json(inversions);
});

//obtener un inversion en especifico
router.get('/:id', async (req,res)=> {
    const { id } = req.params;
    const inversion = await Inversion.findByPk(id);
    res.json(inversion);
});

//crear un inversion
router.post('/', async (req,res)=> {
    const { id_oportunidad, id_user, i_date, i_hour } = req.body;

    if(!id_oportunidad){
        return res.status(400).json({
            error: "Falta Titulo"
        });
    }
    if(!id_user){
        return res.status(400).json({
            error: "Falta id de usuario inversor"
        });
    }
    if(!i_date ){
        return res.status(400).json({
            error: "Falta fecha de inversion"
        });
    }
    if(!i_hour){
        return res.status(400).json({
            error: "Falta hora de inversion"
        });
    }
    const inversion = await Inversion.create({ id_oportunidad, id_user, i_date, i_hour });
    res.json(inversion);
});


module.exports = router;