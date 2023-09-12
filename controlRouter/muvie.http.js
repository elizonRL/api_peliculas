const muvieControlller = require("../controller/muvie.controller");

const getMuvies = async (req, res) => {
  try {
    if ((await muvieControlller.status()) === 200) {
      const muvies = await muvieControlller.getMuviesController();
      res.status(200).send(muvies);
    }else if ((await muvieControlller.status()) === 401) {
        res.status(401).send("Unauthorized");
    }else if ((await muvieControlller.status()) === 404) {
        res.status(404).send("Not Found");
    }
  }catch (error) {
    console.log(error);
  }
}
const updateMuvie = async (req, res) => {
  try {
    const muvie_id = req.params.muvie_id;
    const data_id = await muvieControlller.getMuvieByIdController(muvie_id);
    res.status(200).send(data_id);
    console.log(data_id);
    } catch (error) { 
      console.log(error);
    }
}

exports.getMuvies = getMuvies;
exports.updateMuvie = updateMuvie;