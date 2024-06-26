// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

const fs = require('fs');

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});


// Serve a test file for speed test
app.get('/speedtest', (req, res) => {

    console.log('in speedtest');
    const filePath = path.join(__dirname, 'public', 'testfile');
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'application/octet-stream',
        'Content-Length': stat.size,
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);

    // return res.status(200).json({message: `speedtest done`})
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});





