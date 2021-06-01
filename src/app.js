import * as express from 'express';
import {Server} from 'socket.io';

const app = express();

app.get ('/test',  (request, response) => {
  response.send('test');
});
const server = app.listen (3000, () => {
  console.log('started');
});

const io = new Server(server);

io.on('connection',(socket)=>{
  console.log('user connected')
});
