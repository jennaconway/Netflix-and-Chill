const router = require("express").Router();
const Controller = require("../../controllers/Controller");


// Matches with "/api/user/:email"
router.route("/:email")
  // .get(Controller.findByemail)
  .post(Controller.create);

// Matches with "/api/user/"
router
  .route("/")
  .get(Controller.findAll)
  // .put(Controller.update)
  // .delete(Controller.remove)
  .post(Controller.create);

module.exports = router;
