const User = require("./model");

module.exports={
   index: async (req, res) => {
      try {
         res.render('home', {
            title: "datahifi"
         });
      } catch (err) {
         console.log(err);
      }
   },

   viewLogIn: async (req, res) => {
      try {
         res.render('login');
      } catch (err) {
         console.log(err);
      }
   },
   
   viewSignUp: async (req, res) => {
      try {
         res.render('signup');
      } catch (err) {
         console.log(err);
      }
   },

   viewForm: async (req, res) => {
      try {
         res.render('form');
      } catch (err) {
         console.log(err);
      }
   },
   
   viewProfile: async (req, res) => {
      try {
         res.render('profile');
      } catch (err) {
         console.log(err);
      }
   },

   viewForgot: async (req, res) => {
      try {
         res.render('forgot');
      } catch (err) {
         console.log(err);
      }
   },

   viewDashboard: async (req, res) => {
      try {
         const alertMessage = req.flash('alertMessage');
         const alertStatus = req.flash('alertStatus');

         const alert = { message: alertMessage, status: alertStatus }
         const users = await User.find();
         const user = await User.countDocuments();   

         res.render('admin/dashboard', {
            users,
            alert,
            count: {
               user
            }
         });
      } catch (err) {
         req.flash('alertMessage', `${err.message}`);
         req.flash('alertStatus', 'danger');
         res.redirect('/dashboard');
      }
   },

   actionLogOut: async (req, res) => {},

   actionLogIn: async(req, res) => {},

   actionSignUp: async(req, res) => {},

   actionForm: async(req, res) => {},

   actionProfile: async(req, res) => {},
   
   actionForgot: async(req, res) => {},
   
   viewEditDashboard: async(req, res) => {
      try {
         const { id } = req.params;
         const user = await User.findOne({ _id: id });

         res.render('admin/edit', {
            user,
         })
      } catch (err) {
         req.flash('alertMessage', `${err.message}`);
         req.flash('alertStatus', 'danger');
         res.redirect('/dashboard');   
      }
   },
   
   deleteDashboard: async(req, res) => {
      try {
         const { id } = req.params;
         await User.findByIdAndRemove({
            _id: id
         });

         req.flash('alertMessage', 'Satu Data Warhim Berhasil Dihapus!');
         req.flash('alertStatus', 'success');

         res.redirect('/dashboard');      
      } catch (err) {
         req.flash('alertMessage', `${err.message}`);
         req.flash('alertStatus', 'danger');
         res.redirect('/dashboard');      
      }
   },

}