var bodyParser  = require('body-parser'),
    express     = require('express'),
    app         = express(),
    router      = express.Router(),
    routes      = require('./routes.js')
    PORT        = (process.env.PORT || 3010);

// setup express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./deferredObj"));
app.use(routes);

// server listening
app.listen(process.env.PORT || PORT, function () {
	console.log("Listening on port ", PORT);
});
