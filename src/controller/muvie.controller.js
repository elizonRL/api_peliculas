/*
  Code snippet from e:\WorkSpace\pelicula api\app.js
  const and variable for the api key
  autor: ELizon Rodriguez
  date: 2022-08-15
  version: 1.0.0
*/

const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const axios = require("axios");
const e = require("express");
apiKey = process.env.API_KEY;
let pagina;
const muvies = [];
const muvieByIdUrl = "https://api.themoviedb.org/3/movie/";
const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular",
  params: { language: "es-MX", page: `${pagina}` },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_AUTH}`,
  },
};

// funcion para optener las peliculas populares de la variable url
const getMuviesController = () => {
  // consulta a la api con axios para optener las peliculas populares de la variable url
  return new Promise(async (resolve, reject) => {
    const response = await axios.request(options);
    resolve(response.data.results);
  });
};
const status = async () => {
  const response = await axios.request(options);
  return response.status;
};
//funcion para optener una pelicula por id
const getMuvieByIdController = async (muvie_id) => {
  const response = await axios.get(
    `${muvieByIdUrl}${muvie_id}?api_key=${apiKey}&language=es-MX`
  );

 
  return response.data;
};

//funcion para agregar una pelicula al array
const addMuvieController = async (muvie_id) => {
  const response = await axios.get(
    `${muvieByIdUrl}${muvie_id}?api_key=${apiKey}&language=es-MX`
  );
 
  muvies.push({
    muvie_id: uuidv4(),
    id_pelicula: response.data.id,
    title: response.data.title,
    description: response.data.overview,
    img: response.data.poster_path,
    date: response.data.release_date,
    poularity: response.data.popularity,
    original_language: response.data.original_language,
  });
  return muvies;
}

//funcion para mostrar las peliculas en el array
const getMyFavorites = () => {

  return muvies;
};

//funcion para eliminar una pelicula del array por su pocision
const deleteMuvieController = (muvie_id) => {
  const indexOfId = muvies.findIndex(
    (element) => element.muvie_id === muvie_id
  );
  muvies.splice(indexOfId, 1);
  return muvies;
};

exports.getMuviesController = getMuviesController;
exports.status = status;
exports.getMuvieByIdController = getMuvieByIdController;
exports.getMyFavorites = getMyFavorites;
exports.deleteMuvieController = deleteMuvieController;
exports.addMuvieController = addMuvieController;
