
module.exports = {
    viewLogin: async (req, res) => {
        try {
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMessage, status: alertStatus };
            if (req.session.user == null || req.session.user == undefined) {
                res.render('index', {
                    alert,
                });
            } else {
                res.redirect('/admin/dashboard');
            }
        } catch (error) {
            res.redirect('/admin/login');
        }
    },

    addLogin: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await Users.findOne({ username: username });
            if (!user) {
                req.flash('alertMessage', 'User yang anda masukan tidak ada!!');
                req.flash('alertStatus', 'danger');
                res.redirect('/admin/signin');
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                req.flash('alertMessage', 'Password yang anda masukan tidak cocok!!');
                req.flash('alertStatus', 'danger');
                res.redirect('/admin/login');
            }

            req.session.user = {
                id: user.id,
                username: user.username,
                role: user.role
            }

            res.redirect('/admin/dashboard');

        } catch (error) {
            res.redirect('/admin/login');
        }
    }
}