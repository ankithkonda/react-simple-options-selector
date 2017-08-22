var React = require('react');
var ReactDOM = require('react-dom');
var ReactSimpleOptionsSelector = require('react-simple-options-selector');

var App = React.createClass({
	render () {
		return (
			<div>
				<h2>Example Options:</h2>
				<ReactSimpleOptionsSelector />

			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
