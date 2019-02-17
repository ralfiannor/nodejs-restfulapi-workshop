module.exports = (req, res, next) => {
  let { method, query, params } = req;
  let schemaPost = {
    'name': {
      notEmpty: {
        errorMessage: 'Is Required!'
      },
    },
    'email': {
      notEmpty: {
        errorMessage: 'Is Required!'
      },
    },
  };

  let schemaPut = {
    id: {
      isLength: {
        errorMessage: 'Id should be at least 24 chars long',
        options: { min: 24, max: 24 }
      }
    }
  };

  switch (method) {
    case 'GET':
      req.check(schemaPut);
      break;
    case 'PUT':
      req.check(schemaPut);
      break;
    case 'POST':
      req.checkBody(schemaPost);
      break;
  }

  req.getValidationResult().then((result) => {
    // if errors empty next step
    if (result.isEmpty()) return next();
    return res.status(400).send({
      status: 400,
      message: 'Invalid parameter',
      errors: result.array()
    });
  });
};