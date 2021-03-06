define(['exports', 'module', 'react'], function (exports, module, _react) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _React = _interopRequireDefault(_react);

  console.warn('This file is deprecated, and will be removed in v0.24.0. Use react-bootstrap.js or react-bootstrap.min.js instead.');
  console.warn('You can read more about it at https://github.com/react-bootstrap/react-bootstrap/issues/693');

  /**
   * Maps children that are typically specified as `props.children`,
   * but only iterates over children that are "valid components".
   *
   * The mapFunction provided index will be normalised to the components mapped,
   * so an invalid component would not increase the index.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} mapFunction.
   * @param {*} mapContext Context for mapFunction.
   * @return {object} Object containing the ordered map of results.
   */
  function mapValidComponents(children, func, context) {
    var index = 0;

    return _React['default'].Children.map(children, function (child) {
      if (_React['default'].isValidElement(child)) {
        var lastIndex = index;
        index++;
        return func.call(context, child, lastIndex);
      }

      return child;
    });
  }

  /**
   * Iterates through children that are typically specified as `props.children`,
   * but only iterates over children that are "valid components".
   *
   * The provided forEachFunc(child, index) will be called for each
   * leaf child with the index reflecting the position relative to "valid components".
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} forEachFunc.
   * @param {*} forEachContext Context for forEachContext.
   */
  function forEachValidComponents(children, func, context) {
    var index = 0;

    return _React['default'].Children.forEach(children, function (child) {
      if (_React['default'].isValidElement(child)) {
        func.call(context, child, index);
        index++;
      }
    });
  }

  /**
   * Count the number of "valid components" in the Children container.
   *
   * @param {?*} children Children tree container.
   * @returns {number}
   */
  function numberOfValidComponents(children) {
    var count = 0;

    _React['default'].Children.forEach(children, function (child) {
      if (_React['default'].isValidElement(child)) {
        count++;
      }
    });

    return count;
  }

  /**
   * Determine if the Child container has one or more "valid components".
   *
   * @param {?*} children Children tree container.
   * @returns {boolean}
   */
  function hasValidComponent(children) {
    var hasValid = false;

    _React['default'].Children.forEach(children, function (child) {
      if (!hasValid && _React['default'].isValidElement(child)) {
        hasValid = true;
      }
    });

    return hasValid;
  }

  module.exports = {
    map: mapValidComponents,
    forEach: forEachValidComponents,
    numberOf: numberOfValidComponents,
    hasValidComponent: hasValidComponent
  };
});