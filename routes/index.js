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
      "id": 1,
      "imagen": "https://images.unsplash.com/photo-1663167266768-b7384b93b28e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      "titulo": "Todos por Marcos Fernando",
      "descripcion": "Fernando es un amigo, padre que en estos momentos dificiles necesita de nosotros",
      "vendidos": 4,
      "premios": [
        "Una TV",
        "Una Heladera",
        "Un termo"
      ]
    },
    {
      "id": 2,
      "imagen": "https://images.unsplash.com/photo-1662855802712-7e30ebfbb194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      "titulo": "Todos por Maria Antonieta",
      "descripcion": "Fernando es un amigo, padre que en estos momentos dificiles necesita de nosotros",
      "vendidos": 10,
      "premios": [
        "Un Barrilito de Heineken",
        "Un Chromecast",
        "Una Jarra electrica"
      ]
    }
  ]
}

router.get('/rifas/creadas', (req, res) => res.send(creadas));

module.exports = router;
