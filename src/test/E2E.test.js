const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require('../app');

chai.use(chaiHttp);

describe("Suitede de test todas las peliculas", () => {
  it("Deberia de retornar 200", () => {
    
    chai.request(app)
      .get("/")
      .set('content-type', 'application/json')
      .end((err, res) => {
        chai.assert.equal(res.status, 200);
      });
  });
});
/*
test para buscar pelicula por id 
*/   

describe("Suite de test busqueda de pelicula por id", () => { 
  it("Deberia de retornar 200", () => {
    chai.request(app)
      .put("/buscarpelicula/615656")
      .set('content-type', 'application/json')
      .end((err, res) => {
        chai.assert.equal(res.status, 200);
        chai.assert.equal(res.body[0].title, "Megalodón 2: El gran abismo");
      });
  });
});
