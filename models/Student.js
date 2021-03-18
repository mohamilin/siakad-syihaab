const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    nisn : {
        type: Number,
        default : null
    },
    user_id: {
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
    no_hp: {
        type: String,
        default: null
    },
    ayah : {
        nama_ayah: {
            type: String,
        },
        pekerjaan : {
            type: String,
        },
        no_hp: {
            type: Number
        },
        alamat : {
            type : String,
        }
    },
    ibu : {
        nama_ibu: {
            type: String,
        },
        pekerjaan : {
            type: String,
        },
        no_hp: {
            type: Number
        },
        alamat : {
            type : String,
        }
    },
    wali : {
        nama_wali: {
            type: String,
        },
        pekerjaan : {
            type: String,
        },
        no_hp: {
            type: Number
        },
        alamat : {
            type : String,
        }
    },
    diterima : {
        dikelas : {
            type: String
        },
        tgl : {
            type: Date
        }
    },
    asal_sekolah : {
        nama : {
            type: String
        },
        alamat : {
            type: String
        }
    },
    kelas_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'classes'
    },
    status: {
        type: String,
        enum: ['aktif', 'pindah', 'alumni'],
        default: 'aktif'
    }
});

const Student = new mongoose.model('students', studentSchema);
module.exports = {Student}