var React = require('react');
var ReactDOM = require('react-dom');
var ReactSimpleOptionsSelector = require('react-simple-options-selector');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactSimpleOptionsSelector />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
