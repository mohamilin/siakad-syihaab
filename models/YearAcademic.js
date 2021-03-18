const mongoose = require("mongoose");


const yearAcademicSchema = new mongoose.Schema({
    tahun_pelajaran : {
        type: String,
        required: true
    },
    semester : {
        type: String,
        enum: ['Ganjil', 'Genap'],
        default: 'Ganjil'
    }
});

const YearAcademic = new mongoose.model('years', yearAcademicSchema);
module.exports ={YearAcademic}