const express = require('express');
const port = process.env.PORT || 3333;

const server = express();

server.use(express.static('public'));

server.get('/user.json', express.json(), (req, res) => {
    res.set({
        'Accept': 'application.json',
        'Conent-Type': 'application/json'
    });
    const user = {
        name: "bmurdock",
        link: "https://github.com/bmurdock",
        email: "bmurdock@heliotraining.com"
    };
    res.send(user);
})
server.listen(port, (err) => {
    if (err) {
        console.error('Server failed to start: ', err);
        return;
    }
    console.log(`Server listening on port ${port}...`);
});