const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    guru_id : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers'
    }],
    kelas_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes'
    }

});

const HomeroomTeacher = new mongoose.model('homeroomTeachers', classSchema);
module.exports = {HomeroomTeacher}