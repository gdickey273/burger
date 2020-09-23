const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res){
  burger.selectAll(function(data){
    // let hbsObj = {"burgers": data}
    // console.log(hbsObject);
    const hbsObj = {burgers: data};
    res.json(hbsObj);
    //res.render("index", hbsObj);
  });

});

router.post("/api/burgers", function(req, res){
  burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result){
    res.json(result);
  });
});

router.put("/api/burgers/:id", function(req, res){
  burger.updateOne({devoured: req.body.devoured}, `id = ${req.body.id}`, function(result){
    if(result.changedRows === 0){
      return res.status(404).end();
    }
    res.status(202).end();
  })
})

module.exports = router;