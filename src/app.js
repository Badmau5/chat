import * as express from 'express';
import {Server, } from 'socket.io';
import * as http from 'http';

const app = express();

app.get ('/test',  (request, response)=>{
    response.send('test');
});
app.listen (3000, ()=>{
    console.log('started');
});

const server = http.createServer(app);
const io = new Server(server);

io.on('connection',(socket)=>{
    console.log('user connected')
}); 
