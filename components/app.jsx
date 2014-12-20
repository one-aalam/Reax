/** @jsx React.DOM */

var React = require('react');

var Comment = require('./comment'),
	Loader  = require('./loader');

var App = React.createClass({

	// Render...
	render: function() {
		return (
			<div className="reax-app">
				<Comment/>
				<Loader/>
			</div>
		)
	}

});

module.exports = App;