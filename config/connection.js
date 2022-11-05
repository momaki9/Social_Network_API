const { connect, connection } = require('mongoose');

// insert database name below
connect('mongodb://localhost/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;