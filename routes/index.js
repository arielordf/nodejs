var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const creadas = {
  "total": 2,
  "list": [
    {
      "imagen": "https://images.unsplash.com/photo-1663167266768-b7384b93b28e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      "titulo": "Todos por Cesar Juan Alberto",
      "vendidos": 3,
      "id": 1
    },
    {
      "imagen": "https://images.unsplash.com/photo-1662855802712-7e30ebfbb194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      "titulo": "Todos por Maria Joaquina",
      "vendidos": 10,
      "id": 2
    }
  ]
}

router.get('/rifas/creadas', (req, res) => res.send(creadas));

module.exports = router;
