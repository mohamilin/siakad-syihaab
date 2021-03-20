const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
    section : {
        type: String
    },
    kelas_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes'
    },
    wali_kelas : [{
        guru_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'teachers'
        }
    }],
    jumlah : {
        type : Number
    }
});

const SectionClass = new mongoose.model('sections', sectionSchema);
module.exports = {SectionClass}