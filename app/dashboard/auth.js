module.exports = {
	ensureAuthenticatedAdmin: function (req, res, next) {
		if (req.isAuthenticated()) {
         if (req.user.role === "admin") {
            return next();
         }
		}
		req.flash("alertMessage", "You're not authorized to access this recourse.");
      req.flash('alertStatus', 'danger');
		res.redirect("/auth/login");
	},
};
