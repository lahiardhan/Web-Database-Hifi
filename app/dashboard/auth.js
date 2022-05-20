module.exports = {
	ensureAuthenticatedAdmin: function (req, res, next) {
		if (req.isAuthenticated()) {
         if (req.user.role === "admin") {
            return next();
			} else {
				req.flash("alertMessage", "You're not authorized to access this recourse.");
				req.flash('alertStatus', 'red');
				res.redirect("/auth/login");
			}
		}
		req.flash("alertMessage", "Silahkan login terlebih dulu.");
		req.flash('alertStatus', 'red');
		res.redirect("/auth/login");
	},
};
