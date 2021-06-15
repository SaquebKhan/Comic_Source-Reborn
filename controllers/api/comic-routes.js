const { default: axios } = require('axios');

const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('GET /api/comic');
    axios.get()
    .then(data => {
        res.json(data)
    })
    .catch(function(err) {
        console.log(err)
        res.status(500).json(err)
    }) 

})

module.exports = router;