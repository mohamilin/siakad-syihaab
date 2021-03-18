const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    mata_pelajaran: {
        type: String,
        required: true
    },
    kelas_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes',
    },
    teacher_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers'
    }
});

const Subject = new mongoose.model('subjects', classSchema);
module.exports = {Subject}