import express from 'express'

const app = express();
const PORT = 8000;
app.listen(PORT,()=>{console.log("Server up and running in port => 8000")})