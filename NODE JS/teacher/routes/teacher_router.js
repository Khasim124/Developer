var express = require('express');

const controller = require("../controllers/control")
var router = express.Router();

router.post("/", controller.postteacherdetails);
router.get("/", controller.getteacherdetails);
router.get("/:id", controller.getbyidteacherdetails);
router.put("/:id", controller.putteacherdetails);
router.delete("/:id", controller.deleteteacherdetails);

module.exports = router;