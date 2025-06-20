const { error } = require("console");
const {student_info} = require("../model/First")

module.exports = {
    async createstudentinfo(req,res){
        try{
            const create = await student_info.create(req.body);
            res.status(201).json(create)
        }catch(error){
            res.status(404).json({errors : error.message})
        }
    },
    async getstudentinfo(req,res){
        try {
            const getAll = await student_info.findAll();
            res.status(201).json(getAll)
        } catch (error) {
            res.status(404).json({errors :error.message})
    }
},
    async getbystudentinfo(req, res) {
        try {
            const get = await student_info.findByPk(req.params.id);
            res.status(201).json(get)
        } catch (error) {
            res.status(404).json({ errors: error.message })
        }
    },
    async putstudentinfo(req, res) {
        try {
            const put = await student_info.findByPk(req.params.id);

            if (!put) {
                return res.status(404).json({ message: "Student not found" });
            }

            await put.update(req.body);

            res.status(200).json(put);
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
    },
    async deletestudentinfo(req, res) {
        try {
            const deletedCount = await student_info.destroy({
                where: { id: req.params.id }
            });

            if (deletedCount === 0) {
                return res.status(404).json({ message: "Student not found" });
            }

            res.status(200).json({ message: "Student deleted successfully" });
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
    }
    
}