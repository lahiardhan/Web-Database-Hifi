const User = require("./model");
const bcrypt = require("bcryptjs");

module.exports={
   index: async (req, res) => {
      try {
         let role, nama
         if(req.isAuthenticated()){
            role = req.user.role;
            nama = req.user.nama;
         }
         res.render('home', {
            loggedIn: req.isAuthenticated(), 
            user: role, 
            nama: nama
         });
      } catch (err) {
         console.log(err);
      }
   },

   viewForm: async (req, res) => {
      try {
         User.findById(req.user.id, function(err, foundUser){
            if(err){
              console.log(err);
            }
            else{
              res.render('form', {user: foundUser});
            }
          });
      } catch (err) {
         console.log(err);
      }
   },
   
   viewProfile: async (req, res) => {
      try {
         const user = req.user
         if(req.user.nama !== null){
            res.render('profile', {
               user: user, 
               message: req.flash('alertMessage'),
               status: req.flash('alertStatus')
            });
         }
         else{
            res.redirect('/');
         }
      } catch (err) {
         console.log(err);
      }
   },

   actionForm: async(req, res) => {},

   actionProfile: async(req, res) => {},
   
   
   viewForgot: async (req, res) => {
		try {
			res.render("forgot", {
            title: 'Ubah Password | Database HIFI',
            message: req.flash('alertMessage'),
            status: req.flash('alertStatus')
         });
		} catch (err) {
			console.log(err);
		}
	},

	actionForgot: async (req, res, next) => {
      try {
         const { username, email, password } = req.body;

         const user = await User.findOne({ username: username });

         if(user){
            if(user.email == email) {
               const updated = ({password})
               bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(updated.password, salt, (err, hash) => {
                     if(err) throw(err);
                     // save pass to hash
                     updated.password = hash;
                     User.findOneAndUpdate({username: username}, {password: updated.password}).then(() => {
                        console.log(user);
                        req.flash('alertMessage','Berhasil merubah password! Silahkan login kembali.');
                        req.flash('alertStatus', 'success');
                        res.redirect('/auth/login');
                     })
                  })
               })

            } else {
               req.flash('alertMessage','Email yang dimasukkan salah!');
               req.flash('alertStatus', 'danger');
               res.redirect('/forgot');
            }
         }
         else{
            req.flash('alertMessage','Username tidak ditemukan!');
            req.flash('alertStatus', 'danger');
            res.redirect('/forgot');
         }
      } catch (err) {
         req.flash('alertMessage', `${err.message}`);
         req.flash('alertStatus', 'danger');
         res.redirect('/auth/login');
      }
	},
   
}