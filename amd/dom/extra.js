define(['exports', '../util', './index', '../selector/index'], function (exports, _util, _index, _selectorIndex) {
    /**
     * @module DOM (extra)
     */

    'use strict';

    exports.__esModule = true;

    /**
     * Append each element in the collection to the specified element(s).
     *
     * @param {Node|NodeList|Object} element What to append the element(s) to. Clones elements as necessary.
     * @return {Object} The wrapped collection
     * @chainable
     * @example
     *     $('.item').appendTo(container);
     */

    function appendTo(element) {
        var context = typeof element === 'string' ? _selectorIndex.$(element) : element;
        _index.append.call(context, this);
        return this;
    }

    /*
     * Empty each element in the collection.
     *
     * @return {Object} The wrapped collection
     * @chainable
     * @example
     *     $('.item').empty();
     */

    function empty() {
        return _util.each(this, function (element) {
            return element.innerHTML = '';
        });
    }

    /**
     * Remove the collection from the DOM.
     *
     * @return {Array} Array containing the removed elements
     * @example
     *     $('.item').remove();
     */

    function remove() {
        return _util.each(this, function (element) {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        });
    }

    /**
     * Replace each element in the collection with the provided new content, and return the array of elements that were replaced.
     *
     * @return {Array} Array containing the replaced elements
     */

    function replaceWith() {
        return _index.before.apply(this, arguments).remove();
    }

    /**
     * Get the `textContent` from the first, or set the `textContent` of each element in the collection.
     *
     * @param {String} [value]
     * @return {Object} The wrapped collection
     * @chainable
     * @example
     *     $('.item').text('New content');
     */

    function text(value) {

        if (value === undefined) {
            return this[0].textContent;
        }

        _util.each(this, function (element) {
            return element.textContent = '' + value;
        });

        return this;
    }

    /**
     * Get the `value` from the first, or set the `value` of each element in the collection.
     *
     * @param {String} [value]
     * @return {Object} The wrapped collection
     * @chainable
     * @example
     *     $('input.firstName').value('New value');
     */

    function val(value) {

        if (value === undefined) {
            return this[0].value;
        }

        _util.each(this, function (element) {
            return element.value = value;
        });

        return this;
    }

    /*
     * Export interface
     */

    exports.appendTo = appendTo;
    exports.empty = empty;
    exports.remove = remove;
    exports.replaceWith = replaceWith;
    exports.text = text;
    exports.val = val;
});