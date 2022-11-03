const express = require('express');
const session = require('express-session');
const fileupload = require('express-fileupload');
const fs = require('fs');
const cors = require('cors');
const app = express();
var path = require('path');


const port = 5000;

app.use(session({secret: 'gdgdvdydgygfiagfgaifgf'}));
app.use(express.json());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname,'temp')
}));
app.use(cors());

app.listen(port,()=>{
    console.log('Rodando na porta 5000');
})
