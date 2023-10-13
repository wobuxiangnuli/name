const express = require("express");

const { send } = require("vite");

const indexdata = require('../data/index.json')

const router = express.Router();
router.get('/ts',(req,res) => {
    res.send(indexdata)
})

router.get("/tt",(req,res) => {
    res.send('测试成功')
})

module.exports = router