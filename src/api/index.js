const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Route to get the JSON data
app.get('/posts/index.json', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'posts', 'index.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Server Error');
            return;
        }
        res.header("Content-Type", "application/json");
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
