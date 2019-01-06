var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var httpStatus = require('http-status');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

let carrinho = [1];

router.get('/', function (req, res) {
  res.status(httpStatus.OK).json({ status: httpStatus.OK, carrinho: carrinho });
});

router.post('/adicionar/:idProduto', function (req, res) {
  carrinho.push(parseInt(req.body.idProduto));
  res.status(httpStatus.OK).json({ status: httpStatus.OK, carrinho: carrinho });
});

router.delete('/remover/:idProduto', function (req, res) {
  try {
    carrinho.forEach((item, index) => {
      if(item === parseInt(req.params.idProduto)) {
        if(carrinho.length <= 1) {
          carrinho = []
        } else {
          delete carrinho[index];
        }
      }
    });

    res.status(httpStatus.OK).json({ status: httpStatus.OK, carrinho: carrinho });
  } catch (error) {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, carrinho: carrinho });
  }
});

module.exports = router;
