/*
    Rutas de Eventos: host + /api/tutorials
*/

const { Router } = require('express');
const {
    getTutorials,
    getTutorialById,
    findAllPublished,
    createTutorial,
    updateTutorial,
    deleteTutorial,
    deleteAllTutorials
} = require('../controllers/tutorial.controller');

const router = Router();

// Obtener todos los tutoriales
router.get('/', getTutorials);

// Recuperar todos los Tutoriales publicados
router.get('/published/', findAllPublished);

// Obtener tutoriales por id
router.get('/:id', getTutorialById);

// Crear tutorial
router.post('/', createTutorial);

// Actualizar tutorial
router.put('/:id', updateTutorial);

// Borrar tutorial por id
router.delete('/:id', deleteTutorial);

// Borrar todos los tutoriales
router.delete('/', deleteAllTutorials);

module.exports = router;