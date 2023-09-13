const express = require("express");
const router = express.Router();
const muvieHttp = require("../controlRouter/muvie.http");


router.route('/')
    .get(muvieHttp.getMuvies);
router.route('/buscarpelicula/:muvie_id')
    .put(muvieHttp.updateMuvie);
router.route('/misfavoritas')
    .get(muvieHttp.getMyFavoritesMuevies);
router.route('/misfavoritas/:muvie_id')
    .delete(muvieHttp.deleteMuvie);
exports.router = router;
