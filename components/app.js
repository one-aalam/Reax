/** @jsx React.DOM */

var React = require('react');

var Comment = require('./comment');

var App = React.createClass({

	// Render...
	render: function() {
		return (
			<div className="reax-app">
				<Comment/>
			</div>
		)
	}

});

module.exports = App;