const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//FIND ALL CATEGORIES

router.get('/', async (req, res) => {
  
  const categoryData = await Category.findAll();

  return res.json(categoryData);
 
});

//FIND CATEGORY BY ID

router.get('/:id', async (req, res) => {

  const categoryData = await Category.findByPk(req.params.id);

  return res.json(categoryData);

});


//CREATE CATEGORY

router.post('/', async (req, res) => {

  const categoryData = await Category.create(req.body);

  return res.json(categoryData);
});

//UPDATE CATEGORY

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

//DELETE CATEGORY

router.delete('/:id', async (req, res) => {

  const categoryData = await Category.destroy(
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(categoryData);
});

module.exports = router;
