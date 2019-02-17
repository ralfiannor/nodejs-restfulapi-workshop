const { Router } = require('express');
const validators = require('validators');

module.exports = () => {
  let routes = Router();

  // users service
  routes.get(`/users/:id`, validators.users);
  routes.put(`/users/:id`, validators.users);
  routes.post(`/users`, validators.users);

  return routes;
};