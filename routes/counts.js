const router = require('express').Router();
const {
  createCount,
  getCounts,
  getStoreCounts,
  deleteCount,
  patchCount,
} = require('../controllers/counts');
const { celebrate, Joi, Segments } = require('celebrate');

router.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    store: Joi.string().required(),
    count: Joi.object().keys({
      Pennies: Joi.number().required(),
      Nickels: Joi.number().required(),
      Dimes: Joi.number().required(),
      Quarters: Joi.number().required(),
      Dollars: Joi.number().required(),
      Fives: Joi.number().required(),
      Tens: Joi.number().required(),
      'Large Bills': Joi.number().required()
    })
  })
}), createCount);

router.get('/', getCounts);

router.get('/:store', celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    store: Joi.string().required()
  })
}), getStoreCounts);

router.delete('/:id', celebrate({
  [Segments.BODY]: Joi.object().keys({
    _id: Joi.string().required()
  })
}), deleteCount);

router.patch('/:id', celebrate({
  [Segments.BODY]: Joi.object().keys({
    _id: Joi.string().required(),
    count: Joi.object().keys({
      Pennies: Joi.number().required(),
      Nickels: Joi.number().required(),
      Dimes: Joi.number().required(),
      Quarters: Joi.number().required(),
      Dollars: Joi.number().required(),
      Fives: Joi.number().required(),
      Tens: Joi.number().required(),
      'Large Bills': Joi.number().required()
    })
  })
}), patchCount);

module.exports = router;
