/*
  Code snippet from e:\WorkSpace\pelicula api\app.js
  const and variable for the api key
  autor: ELizon Rodriguez
  date: 2022-08-15
  version: 1.0.0
*/

require('dotenv').config();
const axios = require('axios');
apiKey = process.env.API_KEY;
pagina = 1
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular',
  params: {language: 'es-MX', page: `${pagina}`},
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_AUTH}`
  }
};

// funcion para optener las peliculas populares de la variable url
const getMuviesController = async()=>{
 // consulta a la api con axios para optener las peliculas populares de la variable url
    const response = await axios.request(options);
    const status = response.status;
    return response.data;
}
const status = async()=>{
    const response = await axios.request(options);
    return response.status;
}
//funcion para optener una pelicula por id  
const getMuvieByIdController = async(muvie_id)=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${muvie_id}?api_key=${apiKey}&language=es-MX`);
    return response.data;
}

exports.getMuviesController = getMuviesController;
exports.status = status;
exports.getMuvieByIdController = getMuvieByIdController;