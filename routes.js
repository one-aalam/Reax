var isProduction = process.env.NODE_ENV === 'production';

var JSX   = require('node-jsx').install(),
	React = require('react'),
	tvdb  = require('node-tvdb'),

	keys  = require('./keys'),

	App = require('./components/app'),



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


	var _tv       = new tvdb(keys.tvdb.api_key);


module.exports = {
	index: function(req, res){

		// Get the component and render it as a string

		var appHtm = React.renderToString(App(users));

		res.render('home',{
			markup: appHtm, // react markup
			state: JSON.stringify(['Aftab','Alam']) // state
		});
	},
	api:{
		getUsers: function(req, res){
			res.send(users);
		},
		getShows: function(req, res){
			_tv.getSeries("Breaking Bad", function(error, response) {
    			// handle error and response
    			if(error) next(error);
    			res.send(response);
			});
		}
	}
}