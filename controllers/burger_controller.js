var express =  require ('express')
var burger = require ('../models/burger')

var router = express.Router(); 

router.get("/", function(req, res) {
    // don't need req object, sending res

    burger.selectAll(function(result) {
        res.render('index', {burgers: result})
    }); 
    
    
})

router.post("/", function(req, res) {
    let {burger_name} = req.body;
    burger.insertOne(burger_name, function(result) {
        res.json(result);
    }) 
})

router.put("/", function(req, res) {
    let {id} = req.body;
    burger.updateOne(id, function(result) {
        res.json(result);
    }) 
})


module.exports = router; 