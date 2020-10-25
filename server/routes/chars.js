require('../data/database');
const express = require('express');
const router = express.Router();
const charModel = require('../Models/char');

/* GET users listing. */
router.get('/', (req, res) => {
  charModel.find({}, (err, data) => {
    if (err) {
      res.send('hi')
    }
    else {
      res.send(data);
    }
  })
});

router.post('/', (req, res) => {
  const task = new charModel(req.body).save().then(() => console.log(`${req.body.id} Saved`));

})
router.delete('/:id', (req,res)=>{
  console.log(req.params);
  charModel.findOneAndDelete({id: req.params.id},(err)=>{
      err?res.send(err):res.status(200).send()
  }

  )
})



module.exports = router;
