const { School } = require("../models/School")
module.exports = {
    viewLembaga: async (req, res) => {
        try {
            const lembaga = await School.find()
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMessage, status: alertStatus };
            res.render('admin/master/lembaga/view', { lembaga, alert })
        } catch {
            res.redirect('/admin/lembaga');
        }
    },

    addLembaga: async (req, res) => {
        const data = {
            nama_lembaga: req.body.nama_lembaga
        }
        try {
            const lembaga = await School.create(data)
            const alertMessage = req.flash('alertMessage', 'Sukses Tambah Data Lembaga');
            const alertStatus = req.flash('alertStatus', 'success');
            const alert = { message: alertMessage, status: alertStatus };
            res.redirect('/admin/lembaga')
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/lembaga')
        }
    },

    editLembaga : async (req, res) => {
        const  { id, nama_lembaga } = req.body
        try {
            const lembaga = await School.findOne({_id: id})
            lembaga.nama_lembaga = nama_lembaga
            await lembaga.save()
            const alertMessage = req.flash('alertMessage', 'Sukses Edit Data Lembaga');
            const alertStatus = req.flash('alertStatus', 'success');
            const alert = { message: alertMessage, status: alertStatus };
            res.redirect('/admin/lembaga')
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/lembaga')
        }
    },

    deleteLembaga : async function(req, res) {
        try {
            const {id} = req.params
            const lembaga = await School.findOne({_id: id})
            await lembaga.remove()
            const alertMessage = req.flash('alertMessage', 'Sukses Hapus Data Lembaga');
            const alertStatus = req.flash('alertStatus', 'success');
            const alert = { message: alertMessage, status: alertStatus };
            res.redirect('/admin/lembaga')
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/lembaga')
        }
    }
}