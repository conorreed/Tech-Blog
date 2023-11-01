const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));


const htmlRoutes = require('./routes/html-routes');
app.use('/', htmlRoutes); 


const apiRoutes = require('./routes/api-routes');
app.use('/', apiRoutes); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
