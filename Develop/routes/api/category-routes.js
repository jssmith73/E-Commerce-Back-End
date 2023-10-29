const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  
  const categoryData = await Category.findAll();

  return res.json(categoryData);
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {

  const categoryData = await Category.findByPk(req.params.id);

  return res.json(categoryData);
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {

  const categoryData = await Category.create(req.body);

  return res.json(categoryData);
  // create a new category
});

router.put('/:id', async (req, res) => {

  const categoryData = await Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(categoryData);
});

router.delete('/:id', async (req, res) => {

  const categoryData = await Category.destroy(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(categoryData);
});

module.exports = router;
