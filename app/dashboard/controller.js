const User = require('../users/model');

module.exports = {
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

   viewEdit: async(req, res) => {
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
   
   actionEdit: async (req, res) => {
      try {
         const { id } = req.params;
         const payload = {
            username: req.body.username,
            password: req.body.password,
            nama: req.body.nama,
            npm: req.body.npm,
            ttl: req.body.ttl,
            tgl: req.body.tgl,
            agama: req.body.agama,
            hp: req.body.hp,
            goldar: req.body.goldar,
            email: req.body.email,
            rumah: req.body.rumah,
            kos: req.body.kos,
            pendidikan: req.body.pendidikan,
            panitia: req.body.panitia,
            organisasi: req.body.organisasi,
            pelatihan: req.body.pelatihan,
            prestasi: req.body.prestasi,
         };

         await User.findOneAndUpdate({
            _id: id
         }, { ...payload });

         req.flash('alertMessage', 'Data User Berhasil Diperbarui!');
         req.flash('alertStatus', 'success');

         res.redirect('/dashboard');
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

         req.flash('alertMessage', 'Data User Berhasil Dihapus!');
         req.flash('alertStatus', 'success');

         res.redirect('/dashboard');      
      } catch (err) {
         req.flash('alertMessage', `${err.message}`);
         req.flash('alertStatus', 'danger');
         res.redirect('/dashboard');      
      }
   },
}