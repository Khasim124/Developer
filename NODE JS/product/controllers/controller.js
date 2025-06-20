const { product_details } = require("../model/product_details");

module.exports = {
    async postproductdetails(req, res) {
        try {
            const create = await product_details.create(req.body);
            res.status(201).json(create);
        } catch (error) {
            console.error("Post Error:", error);
            res.status(400).json({ errors: error.errors || error.message });
        }
    },

    async getproductdetails(req, res) {
        try {
            const getAll = await product_details.findAll();
            res.status(200).json(getAll);
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
    },

    async getbyidproductdetails(req, res) {
        try {
            const get = await product_details.findByPk(req.params.id);
            if (!get) return res.status(404).json({ message: "Product not found" });
            res.status(200).json(get);
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
    },

    async putprodcutdetails(req, res) {
        try {
            const put = await product_details.findByPk(req.params.id);
            if (!put) return res.status(404).json({ message: "Product not found" });

            await put.update(req.body);
            res.status(200).json(put);
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
    },

    async deleteproductdetails(req, res) {
        try {
            const deletedCount = await product_details.destroy({
                where: { Id: req.params.id }
            });

            if (deletedCount === 0) {
                return res.status(404).json({ message: "Product not found" });
            }

            res.status(200).json({ message: "Product deleted successfully" });
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
    }
};
