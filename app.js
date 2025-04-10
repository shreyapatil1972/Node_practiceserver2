const colors = require('colors');
const express = require('express');

const app = express();
const port = 7000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.status(202).send({
    message: 'Server running successfully',
    greet: 'Hello user',
    success: true,
  });
});

app.post('/api', (req, res) => {
  console.log(req.body); // Expects JSON body: { name: "Batch 42" }
  res.status(202).send({
    message: 'This is POST',
    greet: 'Hello user from POST',
    success: true,
    received: req.body,
  });
});

app.delete('/api/:ID', (req, res) => {
  console.log(req.params); // e.g. { ID: '123' }
  res.status(200).send(`DELETE request received for ID: ${req.params.ID}`);
});

app.put('/api/:ID', (req, res) => {
  console.log(req.params);
  res.status(200).send(`PUT request received for ID: ${req.params.ID}`);
});

app.get('/about', (req, res) => {
  res.send('This is the About page');
});

app.get('/contact', (req, res) => {
  res.send('This is the Contact page');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`.rainbow);
});
