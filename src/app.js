/**
* @author ELizon  Rodriguez
/*
* @constant {String} 
*/

require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const muvieRouter = require('./Router/muvie.router').router;
const cors = require('cors')

const port = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(cors())

/** 
* Funcion que optines .
* @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
* @param {ParamDataTypeHere} parameterNameHere - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
* @return {ReturnValueDataTypeHere} Brief description of the returning value here.
*/
app.use('/',muvieRouter);

//app.use("/buscarpelicula/", muvieRuter)
  


app.listen(port, () => {
  console.log(`Server on port ${port}!`);
});

module.exports = app;
