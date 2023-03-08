const checkAuth = require("../utils");
const { Router } = require("express");
const router = new Router();
const { Favourites } = require("../db/models");

router.get("/myFavourites", checkAuth, async (req, res) => {
  try {
    const favourite = await Favourites.findAll({
      where: { user_id: req.userId },
    });
    res.json(favourite);
  } catch (error) {
    console.log(error);
  }
});
//Добавление в избранное
router.post("/addFavouriteTeam", async (req, res) => {
  try {
    const { userId, apiId, name, img } = req.body;
    const favourite = await Favourites.create({
      apiId,
      user_id: userId,
      name,
      img,
      isFavourite: true,
    });

    return res.json({
      favourite,
      message: "Добавлено в избранное",
    });
  } catch (error) {
    console.log(error);
    res.json({ message: "Ошибка при добавлении" });
  }
});
// Удаление
router.delete("/deleteFavouriteTeam/:id", async (req, res) => {
  try {
    const favourite = await Favourites.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Удалено!" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Ошибка при удалении" });
  }
});
module.exports = router;
