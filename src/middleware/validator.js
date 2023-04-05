'use strict';

function validate(request, response, next) {
  if(!request.query.name) {
    next('Checking Users Name');
  } else {
    next();
  }
}

module.exports = validate;