const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema({
    tanggal : {
        type: Date
    },
    kehadiran : [{
        schedule_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'schedules',
            required: true
        },
        status: {
            type: String,
            enum: [null,'Hadir', 'Izin', 'Sakit', 'Dinas'],
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
