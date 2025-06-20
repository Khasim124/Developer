const express = require('express');
const { body, validationResult } = require('express-validator');
const prod_controller = require('../controllers/controller');

const router = express.Router();

const validateProduct = [
    body("Prod_name")
        .notEmpty()
        .withMessage("Product name is required"),

    body("SKU_Code")
        .notEmpty()
        .withMessage("SKU Code is required"),

    body("Category")
        .notEmpty()
        .withMessage("Category is required"),

    body("Price")
        .isFloat()
        .withMessage("Price must be a number"),

    body("Quantity")
        .isInt()
        .withMessage("Quantity must be an integer"),

    body("Date_Added")
        .isDate()
        .withMessage("Date_Added must be a valid date"),

    body("In_stock")
        .isBoolean()
        .withMessage("In_stock must be a boolean"),

    body("Customer_name")
        .notEmpty()
        .withMessage("Customer name is required"),

    body("Customer_phno")
        .isNumeric()
        .isLength({ min: 10 })
        .withMessage("Customer phone must be at least 10 digits"),

    body("Customer_email")
        .isEmail()
        .withMessage("Invalid email"),
];
const handleValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ validationErrors: errors.array() });
    }
    next();
}

router.post("/", validateProduct, handleValidation, prod_controller.postproductdetails);
router.get("/", prod_controller.getproductdetails);
router.get("/:id", prod_controller.getbyidproductdetails);
router.put("/:id", validateProduct, handleValidation, prod_controller.putprodcutdetails);
router.delete("/:id", prod_controller.deleteproductdetails);

module.exports = router;
