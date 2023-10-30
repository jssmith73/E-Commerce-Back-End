const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tagData = await Tag.findAll({
    include: [
      {model: Product, as: 'productTagProducts'}
    ],
  });

return res.json(tagData);
});

router.get('/:id', async (req, res) => {
  const tagData = await Tag.findByPk(req.params.id, {
    include: [
      {model: Product, as: 'productTagProducts'}
    ],
  })
  
  return res.json(tagData);
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {

  const tagData = await Tag.create(req.body)
  
  return res.json(tagData);

});

router.put('/:id', async (req, res) => {

  const tagData = await Tag.update(
  {
    tag_name: req.body.tag_name,
  },
  {
    where: {
    id: req.params.id,
    },
  }
  );

  return res.json(tagData);

  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {

  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });

return res.json(tagData);
  // delete on tag by its `id` value
});

module.exports = router;
