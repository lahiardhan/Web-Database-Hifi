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
         const user = await User.find();
         const users = await User.countDocuments();   

         res.render('admin/dashboard', {
            user,
            count: {
               users
            }
         });
      } catch (err) {
         console.log(err);
      }
   },

   actionLogOut: async (req, res) => {},

   actionLogIn: async(req, res) => {},

   actionSignUp: async(req, res) => {},

   actionForm: async(req, res) => {},

   actionProfile: async(req, res) => {},
   
   actionForgot: async(req, res) => {},
   
   deleteDashboard: async(req, res) => {},
   
   editDashboard: async(req, res) => {},

}