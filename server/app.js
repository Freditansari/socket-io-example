const express = require('express')
const app = express()
const port = process.env.PORT|| 3000;
let server = require('http').Server(app);
let io = require('socket.io')(server);

server.listen(7777);

app.get('/', (req, res) => res.send('Hello World!'))

io.sockets.on('connection', (socket) =>{
    console.log('a client connected');

    //listen to disconnect event
    socket.on('disconnect',() =>{
        console.log('a user disconnected')
    })

    //listen to event 
    socket.on('news', data =>{
        console.log(data.potato);
        //send data to client 
        socket.emit('toclient', {message: 'this data from server'})
    })

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))