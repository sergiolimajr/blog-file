module.exports = {
	index: function (req, res) {
		res.render('admin');
	},
	new: function (req, res) {
		res.render('admin-new');
	}
}