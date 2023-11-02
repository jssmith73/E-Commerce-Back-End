const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


//FIND ALL TAGS

router.get('/', async (req, res) => {
  const tagData = await Tag.findAll({
    include: [
      {model: Product, as: 'productTagProducts'}
    ],
  });

return res.json(tagData);
});


//FIND TAG BY ID

router.get('/:id', async (req, res) => {
  const tagData = await Tag.findByPk(req.params.id, {
    include: [
      {model: Product, as: 'productTagProducts'}
    ],
  })
  
  return res.json(tagData);
});

router.post('/', async (req, res) => {

  const tagData = await Tag.create(req.body)
  
  return res.json(tagData);

});

//UPDATE TAG

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
});

//DELETE TAG

router.delete('/:id', async (req, res) => {

  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });

return res.json(tagData);
});

module.exports = router;
