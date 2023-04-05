'use strict';

function error404(request, response, next) {
  if(request.method !== "GET") {
    response.status(404).send("Maybe next year");
  } else if (!request.path.includes('/person')) {
    response.status(404).send("Requested page is not available");
  } else {
    next();
  }
}

module.exports = error404;