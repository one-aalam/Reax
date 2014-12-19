var isProduction = process.env.NODE_ENV === 'production';

var JSX   = require('node-jsx').install(),
	React = require('react'),

	$Rc = require('./components'),



	users = [
		{
			name:'Aftab Alam',
			desg: 'Sr. Software Engg.'
		},
		{
			name:'Rajesh Singh',
			desg: 'Team Lead'
		}
	];


module.exports = {
	index: function(req, res){

		// Get the component and render it as a string

		var appHtm = React.renderToString($Rc.App());


		res.render('home',{
			markup: appHtm, // react markup
			state: JSON.stringify(['Aftab','Alam']) // state
		});
	},
	api:{
		getUsers: function(req, res){
			res.send(users);
		}
	}
}