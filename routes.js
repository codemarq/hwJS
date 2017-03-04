var express = require('express'),
  Router = express.Router();

// page and login routes
Router.get("/", function (req, res) {
	res.sendFile("deferredObj/index.html", options);
});
