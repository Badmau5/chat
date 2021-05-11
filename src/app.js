import * as express from 'express';

const app = express();
app.get ('/',  (request, response)=>{
    response.send('test');
});
app.listen (3000, ()=>{
    console.log('started');
});