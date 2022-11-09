const router = require('express').Router();
const {
  createCount,
  getCounts,
  getStoreCounts,
  deleteCount,
  patchCount,
} = require('../controllers/counts');

router.post('/', createCount);

router.get('/', getCounts);

router.get('/:store', getStoreCounts);

router.delete('/:id', deleteCount);

router.patch('/:id', patchCount);

module.exports = router;
