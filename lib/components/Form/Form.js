'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'renderTitle',
    value: function renderTitle() {
      var title = this.props.title;

      if (title) {
        return _react2.default.createElement(
          'div',
          { className: 'content-block-title' },
          title
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var multiLine = _props.multiLine;
      var title = _props.title;
      var inset = _props.inset;

      var props = _objectWithoutProperties(_props, ['className', 'children', 'multiLine', 'title', 'inset']);

      var classes = (0, _classnames2.default)({
        'list-block': true,
        'inset': !!inset,
        'media-list': !!multiLine
      });
      return _react2.default.createElement(
        'form',
        _extends({ className: className }, props),
        this.renderTitle(),
        _react2.default.createElement(
          'div',
          { className: classes },
          _react2.default.createElement(
            'ul',
            null,
            children
          )
        )
      );
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  title: _react.PropTypes.node,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  multiLine: _react.PropTypes.bool,
  inset: _react.PropTypes.bool
};
Form.defaultProps = {
  multiLine: false,
  inset: false
};
exports.default = Form;