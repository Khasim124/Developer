const { teacher_details } = require("../model/teacher_details");

module.exports = {
    async postteacherdetails(req, res) {
        try {
            const create = await teacher_details.create(req.body);
            res.status(201).json(create);
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
    },

    async getteacherdetails(req, res) {
        try {
            const getAll = await teacher_details.findAll();
            res.status(200).json(getAll);
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
    },

    async getbyidteacherdetails(req, res) {
        try {
            const get = await teacher_details.findByPk(req.params.id);
            if (!get) return res.status(404).json({ message: "Teacher data not found" });
            res.status(200).json(get);
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
    },

    async putteacherdetails(req, res) {
        try {
            const put = await teacher_details.findByPk(req.params.id);
            if (!put) return res.status(404).json({ message: "Teacher data not found" });

            await put.update(req.body);
            res.status(200).json(put);
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
    },

    async deleteteacherdetails(req, res) {
        try {
            const deletedCount = await teacher_details.destroy({
                where: { Id: req.params.id }
            });

            if (deletedCount === 0) {
                return res.status(404).json({ message: "Teacher data not found" });
            }

            res.status(200).json({ message: "teacher data deleted successfully" });
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
    }
};
