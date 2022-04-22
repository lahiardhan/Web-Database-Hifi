const User = require('../users/model');

module.exports = {
   viewLogIn: async (req, res) => {
      try {
         res.render('login', {
            message: req.flash('alertMessage'),
            status: req.flash('alertStatus')
         });
      } catch (err) {
         console.log(err);
      }
   },

   actionLogIn: async(req, res) => {},
   
   viewSignUp: async (req, res) => {
      try {
         res.render('signup', {
            message: req.flash('alertMessage'),
            unameBlank: req.flash('unameMessage'),
            emailBlank: req.flash('emailMessage'),
            passBlank: req.flash('passMessage'),
            status: req.flash('alertStatus')
         });
      } catch (err) {
         req.flash('alertMessage', `${err.message}`);
         req.flash('alertStatus', 'danger');
         res.redirect('/signup');
      }
   },

   actionSignUp: async(req, res, next) => {
      try {
         const { username, email, password } = req.body;
         if(username === "" | undefined) {
            req.flash('unameMessage', 'Username Harus Diisi! (Isi menggunakan NPM Anda)');
            req.flash('alertStatus', 'danger');
            res.redirect('/auth/signup');
         } else if(email === "" | undefined) {
            req.flash('emailMessage', 'Email Harus Diisi!');
            req.flash('alertStatus', 'danger');
            res.redirect('/auth/signup');
         } else if(password === "" | undefined) {
            req.flash('passMessage', 'Password Harus Diisi!');
            req.flash('alertStatus', 'danger');
            res.redirect('/auth/signup');
         } else {
            User.findOne({ username: username }).then((user) => {
               if(user) {
                  req.flash('alertMessage', 'Username sudah digunakan! Coba username lain.');
                  req.flash('alertStatus', 'danger');
                  res.redirect('/auth/signup');
               } else {
                  let user = new User({username, email, password});
                  user.save();

                  req.flash('alertMessage', 'Berhasil membuat akun! Silahkan login kembali.')
                  req.flash('alertStatus', 'success')
                  res.redirect('/auth/login');
               }
            })
         }
      } catch (err) {
         if(err && err.name === 'ValidationError') {
            return res.status(422).json({
               error: 1,
               message: err.message,
               fields: err.errors
            })
         }
         next();
      }
   },
   
   actionLogOut: async (req, res) => {},
}