let app = require('./config/express');
let bodyParser = require('body-parser');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3050, ()=>{
    console.log('listening port 3050');
});