const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.get('/getDayOfWeek/:date', (req, res) => {
    const dateStr = req.params.date;
    
    // Parse the date string in the format DDMMYYYY
    const day = parseInt(dateStr.substring(0, 2));
    const month = parseInt(dateStr.substring(2, 4)) - 1; // Month in JavaScript starts from 0
    const year = parseInt(dateStr.substring(4, 8));

    // Create a new Date object
    const date = new Date(year, month, day);

    // Get the day of the week (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
    const dayOfWeek = date.getDay();

    // Array to map day index to day name
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Send the day of the week as response
    res.json({ dayOfWeek: daysOfWeek[dayOfWeek] });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});