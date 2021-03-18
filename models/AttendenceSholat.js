const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema({
    tanggal : {
        type: Date
    },
    guru_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers'
    },
    kehadiran : [{
        sholat: {
            type: String
        },
        status: {
            type: String,
            enum: [null,'Jamaah', 'Tidak Jamaah', 'Izin', 'Sakit', 'Dinas'],
            default: null
        },
        keterangan : {
            type: String,
        }
    }]
});

const Attendence = new mongoose.model("attendences", attendenceSchema);
module.exports = {
  Attendence,
};
