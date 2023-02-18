const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('sunshine server running');
});

app.listen(port, () => {
    console.log(`server running on port ${port}`)
}); 