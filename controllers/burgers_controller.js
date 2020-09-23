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

})

module.exports = router;