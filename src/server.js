const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');



const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io') (server);

io.on('connection', socket =>{
    socket.on('connectRoom', box => {
        socket.join(box);
    })
});

mongoose.connect('mongodb+srv://user_db:QV5G9wV3QX2lNhW5@cluster0-0upvv.mongodb.net/omnistack?retryWrites=true',{
    useNewUrlParser:true
});

app.use((req, res, next) => {
    req.io = io;

    return next();
})



// adiciona middleware express.json
app.use(express.json());
// adiciona middleware express.urlencoded
app.use(express.urlencoded({ extended: true}));

app.use('/files', express.static((path.resolve(__dirname, '..', 'tmp'))));

app.use(require('./routes'));

server.listen(proccess.env.PORT || 3333);