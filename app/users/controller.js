module.exports={
   index: async (req, res) => {
      try {
         res.render('form', {
            title: "datahifi"
         });
      } catch (err) {
         console.log(err);
      }
   }
}