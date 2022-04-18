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

   actionForm: async(req, res) => {},

   actionProfile: async(req, res) => {},
   
   actionForgot: async(req, res) => {},
   
}