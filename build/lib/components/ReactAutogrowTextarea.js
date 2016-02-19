'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createClass({
	displayName: 'ReactAutogrowTextarea',

	autoGrow: function autoGrow() {

		var el = this.refs.textarea.getDOMNode();

		var offset = !window.opera ? el.offsetHeight - el.clientHeight : el.offsetHeight + parseInt(window.getComputedStyle(el, null).getPropertyValue('border-top-width'));

		el.style.height = 'auto';
		el.style.height = el.scrollHeight + offset + 'px';
	},
	componentDidMount: function componentDidMount() {

		this.autoGrow();
	},
	render: function render() {
		return _react2['default'].createElement('textarea', _extends({
			ref: 'textarea',
			onInput: this.autoGrow
		}, this.props));
	}

});
module.exports = exports['default'];