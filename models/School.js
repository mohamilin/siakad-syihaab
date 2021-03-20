const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
    nama_lembaga: {
        type: String,
        required: true
    },
    identitas : {
        npsn : {
            type: Number
        },
        jenjang_Pend : {
            type: String
        },
        status : {
            type:  String,
            default : 'Swasta'
        },
        alamat : {
            rt_rw : {
                type: String
            },
            kode_pos : {
                type: Number
            },
            kelurahan : {
                type: String
            },
            kecamatan : {
                type: String
            },
            kabupaten : {
                type: String
            },
            provinsi : {
                type : String
            },
            Negara: {
                type : String,
                default : 'Indonesia'
            },
            poisisi_geo : {
                type: String,
                default : '0'
            }
        }
    },
    dataPelengkap : {
        sk_pendirian : {
            type:  String,
        },
        tgl_sk : {
            type: Date
        },
        status_milik : {
            type: String,
            default : 'Yayasan'
        },
        sk_operasional : {
            type:  String,
        },
        tgl_sk_operasional : {
            type: Date
        },
        bank : {
            no_rek : {
                type:  Number
            },
            nama : {
                type:  String
            },
            cabang : {
                type:  String
            },
            atas_nama : {
                type:  String
            }
        },
        mbs : {
            type: String
        },
        iuran : {
            nominal : {
                type: Number
            },
            waktu : {
                type : String,
                default: 'Tahunan'
            }
        },
        pajak : {
            nama_wp : {
                type: String
            },
            npwp: {
                type: Number
            }
        }
    },
    contact : {
        no_tlp : {
            type: Number
        },
        email : {
            type: String
        },
        website: {
            type: String
        }
    }
});

const School = new mongoose.model('schools', schoolSchema);
module.exports = {School}