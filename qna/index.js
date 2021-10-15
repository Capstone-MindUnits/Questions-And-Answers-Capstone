var express = require('express');
var app = express();
app.use(express.static('build'));
var PORT = 3001;

app.get('/', (req, res) => 
    res.render('index.html')
);


app.listen(PORT, function () {
  console.log('Listening on http://localhost:' + PORT);
});

  