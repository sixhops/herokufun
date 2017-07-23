const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Goodbye cruel world');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('App listening on port 3000...');
});
