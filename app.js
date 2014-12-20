/** @jsx React.DOM */
var React = require('react')
	, App = require('./components/app');
	var data = JSON.parse(document.getElementById('initial-state').innerHTML);

	React.renderComponent(
		<App state={datax}/>,
		document.getElementById('react-app'));