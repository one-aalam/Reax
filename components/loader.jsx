/** @jsx React.DOM */

var React = require('react');

var Loader = React.createClass({
	render: function() {
		return (
			<div className="Loader">
				Loading...
			</div>
		);
	}
});

module.exports = Loader;