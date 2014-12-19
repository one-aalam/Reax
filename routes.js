var isProduction = process.env.NODE_ENV === 'production';

var JSX   = require('node-jsx').install(),
	React = require('react'),

	$Rc = require('./components');


module.exports = {
	index: function(req, res){

		// Get the component and render it as a string

		var appHtm = React.renderToString($Rc.App());


		res.render('home',{
			markup: appHtm, // react markup
			state: JSON.stringify(['Aftab','Alam']) // state
		});
	}
}