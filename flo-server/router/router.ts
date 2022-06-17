const Express = require('express');
const router = Express.Router();
const controller = require('../controller/controller');

router.get('/journeys', controller.getAllJourneys);
router.get('/journeys/:id', controller.getJourneysById);

router.post('/journeys/:id/notes', controller.addNewNote);
router.put('/journeys/:journeyId/notes/:id', controller.deleteNoteById);

router.post('/journeys/:id/restaurants', controller.addNewRestaurant);
router.put(
  '/journeys/:journeyId/restaurants/:id',
  controller.deleteRestaurantById
);

module.exports = router;
