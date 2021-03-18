const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    kd_guru: {
        type: Number
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    jenis_kel : {
        type: String,
        enum : ["L", "P"]
    },
    t_lahir: {
        type: String
    },
    tgl_lahir : {
        type: Date
    },
    alamat: {
        type: String
    },
    gol_darah: {
        type: String,
        enum : ["O", "A", "AB", "B"]
    },
    no_hp:{
        type: Number
    },
    riwayat_pend : [{
        nama_institusi : {
            type: String
        },
        jurusan: {
            type: String
        },
        thn_masuk : {
            type:String
        },
        thn_lulus: {
            type:String
        },
        status : {
            type: String,
            enum : ["Lulus", "Masih Kuliah"]
        },
    }],
    tgl_masuk : {
        type: Date
    },
    tgl_keluar: {
        type: Date
    }

});

const Teacher = new mongoose.model('teachers', teacherSchema);
module.exports = { Teacher }