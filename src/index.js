const  express = require('express');
const apiroutes = require('./routes');
const { server} = require('./config');
const serverConfig = require('./config/server-config');

const app = express();

app.use('/api',apiroutes);

// console.log(process.env);
app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running on the port no ${server.PORT}`);
});     