const express = require('express');
const { default: Axios } = require('axios');
const { response } = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    const apiUrl = "https://api.covid19api.com/summary";
    const country = Axios.get(apiUrl).then((response) => {
        res.render('index',{
            global:response.data.Global,
            countries:response.data.Countries
        })
    })
})

module.exports = router;