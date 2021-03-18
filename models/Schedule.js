const mongoose = require("mongoose");
// import moment from 'moment';

const scheduleSchema = new mongoose.Schema({
    class_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes'
    },
    teacher_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers'
    },
    mapel_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subjects'
    },
    subject_id: {
        type: String,
        ref: 'subjects',
        required: true
    },
    time: [{
        hari: {
            type: String,
            required: true
        },
        jam_ke: {
            type:  String,
            required: true
        },
        waktu: {
            type: Date,
            required: true
        }
    }],
});

const Schedule = new mongoose.model('schedules', scheduleSchema);
module.exports = {
    Schedule
}