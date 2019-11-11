import * as express from "express";
// import * as socketIO from "socket.io";

const app = express();

//set the template engine
// app.set('view engine', 'ejs');
//set static file
// app.use(express.static('public'));

// running
const server = app.listen(process.env.PORT, ()=>{
    console.log("App listenning at ", process.env.PORT);
});
//socket.io instantiation
// const io = require("socket.io")(server);

// io.on('connection', (socket)=>{
//     console.log("New user connection");
// });

app.get("/", (req, res) => {
    return "Hello world";
});

