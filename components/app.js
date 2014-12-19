
var React = require('react');

var App = React.createClass({

	handleClick: function(){
		return "Clicked!";
	},

	render: function() {
		return (
			<h1 onClick="{{this.handleClick}}">Hello World!</h1>
		);
	}

});

module.exports = App;