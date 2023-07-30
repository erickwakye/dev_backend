const express = require('express');
const dateFormat = require('date-format');
const app = express();

const PORT = 4000 || process.env.PORT; 

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
  });

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "tipsysmino",
        followers: 66,
        follows: 70,
        date: dateFormat.asString("dd[MM] - hh:mm:ss", new Date()),
    }
    res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username: "tipsysminolink",
        followers: 100,
        follows: 70,
        date: dateFormat.asString("dd[MM] - hh:mm:ss", new Date()),
    }

    res.status(200).json(instaSocial);
});

app.get("/api/v1/linkedIn", (req, res) => {
    const instaSocial = {
        username: "tipsysminolnked",
        followers: 100,
        follows: 20,
        date: dateFormat.asString("dd[MM] - hh:mm:ss", new Date()),
    }
    res.status(200).json(instaSocial);
});


app.get("/api/v1/:token", (req, res) => {
    // console.log(req.params.token);
    res.status(200).json({ param: req.params.token});
});

app.listen(PORT, ()=> {
    console.log(`Server is running at ${PORT}`);
});