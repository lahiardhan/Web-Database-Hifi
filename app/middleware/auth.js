module.exports = {
	ensureAuthenticated: function (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		req.flash("alertMessage", "Silahkan login terlebih dulu.");
      req.flash('alertStatus', 'danger');
		res.redirect("/auth/login");
	},
};
