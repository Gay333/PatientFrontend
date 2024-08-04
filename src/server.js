const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pdfDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for PDF
const pdfSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String
});
const PDF = mongoose.model('PDF', pdfSchema);

// Configure multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to handle PDF upload
app.post('/upload', upload.single('pdf'), (req, res) => {
    const newPDF = new PDF({
        data: req.file.buffer,
        contentType: req.file.mimetype
    });
    newPDF.save((err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send('PDF uploaded successfully');
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
