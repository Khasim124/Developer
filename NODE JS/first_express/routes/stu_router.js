var express = require('express');

const { body, validationResult } = require("express-validator");

const controller = require("../Controllers/control")
var router = express.Router();
const validateStudent = [
    body("student_name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3 })
        .withMessage("Name must be at least 3 characters"),

    body("student_branch").trim().notEmpty().withMessage("Branch is required"),

    body("student_phno")
        .trim()
        .notEmpty()
        .withMessage("Phone number is required")
        .isNumeric()
        .withMessage("Phone must be numeric")
        .isLength({ min: 10, max: 15 })
        .withMessage("Phone must be 10–15 digits"),

    body("student_address").trim().notEmpty().withMessage("Address is required"),

    body("student_fees")
        .notEmpty()
        .withMessage("Fees are required")
        .isInt({ min: 0 })
        .withMessage("Fees must be a positive integer"),
];

const handleValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next(); // 🟢 Move to the next middleware (your controller)
};
  ;

/**
 * @swagger
 * /student_info:
 *   get:
 *     summary: Get all students
 *     responses:
 *       200:
 *         description: A list of students
 */

  /**
   * @swagger
   * /student_info:
   *   post:
   *     summary: Create a new student
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - student_name
   *               - student_branch
   *               - student_phno
   *               - student_address
   *               - student_fees
   *             properties:
   *               student_name:
   *                 type: string
   *               student_branch:
   *                 type: string
   *               student_phno:
   *                 type: string
   *               student_address:
   *                 type: string
   *               student_fees:
   *                 type: integer
   *     responses:
   *       201:
   *         description: Student created successfully
   */

router.post("/",validateStudent,handleValidation, controller.createstudentinfo);
router.get("/", controller.getstudentinfo)
router.get("/:id", controller.getbystudentinfo)
router.put("/:id",validateStudent,handleValidation, controller.putstudentinfo);
router.delete("/:id", controller.deletestudentinfo);


module.exports = router;
