'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _templateObject = _taggedTemplateLiteral(['\n\n\twidth: 100%;\n\t', '\n\t', ';\n\n'], ['\n\n\twidth: 100%;\n\t', '\n\t', ';\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['text-align:center'], ['text-align:center']),
    _templateObject3 = _taggedTemplateLiteral(['\n\n\tmargin-left: ', ';\n\tmargin-right: ', ';\n\tmargin-top: ', ';\n\tmargin-bottom: ', '; \n\t\n\tpadding-left: ', ';\n\tpadding-right: ', ';\n\tpadding-top: ', ';\n\tpadding-bottom: ', '; \n\n\t', ';\n\n\t', ';\n\t\n\t\n\t\n'], ['\n\n\tmargin-left: ', ';\n\tmargin-right: ', ';\n\tmargin-top: ', ';\n\tmargin-bottom: ', '; \n\t\n\tpadding-left: ', ';\n\tpadding-right: ', ';\n\tpadding-top: ', ';\n\tpadding-bottom: ', '; \n\n\t', ';\n\n\t', ';\n\t\n\t\n\t\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\t\tdisplay: inline-block !important;\n\t\tvertical-align: top !important;\n\t'], ['\n\t\tdisplay: inline-block !important;\n\t\tvertical-align: top !important;\n\t']),
    _templateObject5 = _taggedTemplateLiteral(['\n\t\tfloat:', '\n\t'], ['\n\t\tfloat:', '\n\t']),
    _templateObject6 = _taggedTemplateLiteral(['\n\n\tbackground-color: ', ';\n\tcolor:  ', ';\n\tfont:15px;\n\tfont-weight:bold;\n\theight:40px;\n\tborder:none;\n\tborder: 1px solid ', ';\n\tcursor:pointer;\n\tpadding: 0.25em 1em;\n\tborder: 2px solid violetred;\n\tborder-radius: 3px;\n\ttext-align:center;\n\tmin-width:100px !important;\n\n\t\n\n'], ['\n\n\tbackground-color: ', ';\n\tcolor:  ', ';\n\tfont:15px;\n\tfont-weight:bold;\n\theight:40px;\n\tborder:none;\n\tborder: 1px solid ', ';\n\tcursor:pointer;\n\tpadding: 0.25em 1em;\n\tborder: 2px solid violetred;\n\tborder-radius: 3px;\n\ttext-align:center;\n\tmin-width:100px !important;\n\n\t\n\n']);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _polished = require('polished');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var Container = _styledComponents2['default'].div(_templateObject, (0, _polished.clearFix)(), function (props) {
	return props.styles.align === "center" ? (0, _styledComponents.css)(_templateObject2) : '';
});
var OptionContainer = _styledComponents2['default'].div(_templateObject3, function (props) {
	return props.styles.margin.left + 'px';
}, function (props) {
	return props.styles.margin.right + 'px';
}, function (props) {
	return props.styles.margin.top + 'px';
}, function (props) {
	return props.styles.margin.bottom + 'px';
}, function (props) {
	return props.styles.padding.left + 'px';
}, function (props) {
	return props.styles.padding.right + 'px';
}, function (props) {
	return props.styles.padding.top + 'px';
}, function (props) {
	return props.styles.padding.bottom + 'px';
}, function (props) {
	return props.styles.align === "center" && (0, _styledComponents.css)(_templateObject4);
}, function (props) {
	return (props.styles.align === "left" || props.styles.align === "right") && (0, _styledComponents.css)(_templateObject5, props.styles.align);
});
var Button = _styledComponents2['default'].input(_templateObject6, function (props) {
	return props.selected ? props.styles.selected_background_color : "lightgrey";
}, function (props) {
	return props.selected ? props.styles.selected_text_color : "black";
}, function (props) {
	return props.selected ? props.styles.selected_border_color : "black";
});

var ReactSimpleOptionsSelector = (function (_React$Component) {
	_inherits(ReactSimpleOptionsSelector, _React$Component);

	function ReactSimpleOptionsSelector(props) {
		_classCallCheck(this, ReactSimpleOptionsSelector);

		_get(Object.getPrototypeOf(ReactSimpleOptionsSelector.prototype), 'constructor', this).call(this, props);

		var defaultOptionsState = {};
		this.props.options.forEach(function (obj, ind) {
			defaultOptionsState[obj.id] = obj.selected;
		});

		this.state = _extends({}, defaultOptionsState);

		this.optionClicked = this.optionClicked.bind(this);
	}

	_createClass(ReactSimpleOptionsSelector, [{
		key: 'optionClicked',
		value: function optionClicked(event) {

			var optionID = event.target.id;
			var currentState = _extends({}, this.state);

			if (this.props.type === "radio") {

				this.props.options.forEach(function (option) {
					currentState[option.id] = false;
				});

				currentState[optionID] = true;

				this.setState(_extends({}, currentState));
			} else {

				currentState[optionID] = !this.state[optionID];

				this.setState(_defineProperty({}, optionID, !this.state[optionID]));
			}

			var selected = [];
			this.props.options.forEach(function (option) {
				currentState[option.id] ? selected.push(option.id) : null;
			});

			this.props.onSelectionChange(this.props.name, selected);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var options = this.props.options.map(function (option) {
				return _react2['default'].createElement(
					OptionContainer,
					{ key: option.id, styles: _this.props.styles },
					_react2['default'].createElement(Button, { onClick: _this.optionClicked, type: 'button', styles: _this.props.styles, value: option.label, id: option.id, selected: _this.state[option.id] })
				);
			});

			return _react2['default'].createElement(
				Container,
				{ styles: this.props.styles },
				options
			);
		}
	}]);

	return ReactSimpleOptionsSelector;
})(_react2['default'].Component);

exports['default'] = ReactSimpleOptionsSelector;

ReactSimpleOptionsSelector.PropTypes = {
	name: _propTypes2['default'].string.isRequired,
	options: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
		id: _propTypes2['default'].string.isRequired,
		value: _propTypes2['default'].string, // currently unused
		label: _propTypes2['default'].string.isRequired,
		selected: _propTypes2['default'].bool,
		count: _propTypes2['default'].number
	})),
	onSelectionChange: _propTypes2['default'].func,
	type: _propTypes2['default'].string, // radio or checkbox
	styles: _propTypes2['default'].shape({
		selected_text_color: _propTypes2['default'].string,
		selected_border_color: _propTypes2['default'].string,
		selected_background_color: _propTypes2['default'].string,
		margin: _propTypes2['default'].shape({
			left: _propTypes2['default'].number,
			right: _propTypes2['default'].number,
			top: _propTypes2['default'].number,
			bottom: _propTypes2['default'].number
		}),
		padding: _propTypes2['default'].shape({
			left: _propTypes2['default'].number,
			right: _propTypes2['default'].number,
			top: _propTypes2['default'].number,
			bottom: _propTypes2['default'].number
		}),
		align: _propTypes2['default'].string // center, left, right

	})
};

ReactSimpleOptionsSelector.defaultProps = {
	name: 'react-simple-options-selector-example',
	options: [{
		id: _uuid2['default'].v4(),
		value: 'option_a',
		label: 'Option A',
		selected: true,
		count: 3
	}, {
		id: _uuid2['default'].v4(),
		value: 'option_b',
		label: 'Option B',
		selected: false,
		count: 3
	}, {
		id: _uuid2['default'].v4(),
		value: 'option_c',
		label: ' C',
		selected: false,
		count: 3
	}],
	onSelectionChange: function onSelectionChange(name, selected) {
		console.log(name, selected);
	},
	type: 'radio',
	styles: {
		selected_text_color: "#ffffff",
		selected_border_color: "#04755B",
		selected_background_color: "#06BA90",
		margin: {
			left: 0,
			right: 10,
			top: 0,
			bottom: 10
		},
		padding: {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		},
		align: "center"

	}
};
module.exports = exports['default'];