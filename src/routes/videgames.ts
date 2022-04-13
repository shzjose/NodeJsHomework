import express from 'express';
import controller from '../controllers/videogames'

const router = express.Router();

router.get('/videogame', controller.getAll);
router.post('/videogame', controller.create);
router.patch('/videogame/:id', controller.update);
router.delete('/videogame/:id', controller.remove);
router.get('/videogame/:id', controller.get);

export = router;