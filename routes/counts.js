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

router.delete('/:_id', deleteCount);

router.patch('/:_id', patchCount);

module.exports = router;
