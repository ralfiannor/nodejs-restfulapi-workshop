const { Router } = require('express');
const router = Router();

const UserService = require('../services/users.js');

// GET
router.get('/users', async (req, res) => {
  try {
    const getUser = await UserService.get(req.query);
    res.status(200).send(getUser);  
  }
  catch (err) {
    res.status(400).send({
      status: 400,
      message: err.message
    });
  }
});

// GET
router.get('/users/:id', async (req, res) => {
  try {
    const getUser = await UserService.getById(req.params.id);
    res.status(200).send(getUser);  
  }
  catch (err) {
    const statusCode = err.status ? err.status : 400;
    res.status(statusCode).send({
      status: statusCode,
      message: err.message
  });
}
});

// POST
router.post('/users', async (req, res) => {
  try {
    const create = await UserService.create(req.body);
    res.status(200).send(create);  
  }
  catch (err) {
    res.status(400).send({
        status: 400,
        message: err.message
    });
  }
});

// PUT
router.put('/users/:id', async (req, res) => {
  try {
    const updateUser = await UserService.update(req.params.id, req.body);
    res.status(200).send(updateUser);  
  }
  catch (err) {
    res.status(400).send({
      status: 400,
      message: err.message
    });
  }
});

// DELETE
router.delete('/users/:id', async (req, res) => {
  try {
    const deleteUser = await UserService.delete(req.params.id);
    res.status(200).send(deleteUser);
  }
  catch (err) {
    res.status(400).send({
      status: 400,
      message: err.message
    });
  }
});

module.exports = router;