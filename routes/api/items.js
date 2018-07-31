const express = require('express');
const Item = require('../../models/Item');

const router = express.Router();

/**
 * Route:  GET /api/items
 * Desc:   Get ALL Items in the DB -- Sort Descending
 * Access: Public
 */
router.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items));
});

/**
 * Route:  POST /api/items
 * Desc:   Insert new Item into the DB 
 * Access: Public
 */
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save()
    .then(item => res.json(item));
});

/**
 * Route:  DELETE /api/items/:id
 * Desc:   Delete item from the DB 
 * Access: Public
 */
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove()
      .then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;