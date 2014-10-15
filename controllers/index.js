var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	success: function(req, res) {
		res.render('success');
	}
};

module.exports = indexController;