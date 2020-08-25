const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();
const cors = require('cors');

require('dotenv').config();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(
	favicon(path.join(__dirname, 'build', 'favicon.ico'))
);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
	console.log(`Express app listening on port ${PORT}`);
});
