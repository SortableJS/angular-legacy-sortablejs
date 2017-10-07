/* eslint-disable */
/**
 * @author RubaXa <trash@rubaxa.org>
 * @licence MIT
 */
(function (factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['angular', 'sortablejs'], factory);
  }
  else if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
    require('angular');
    factory(angular, require('sortablejs'));
    module.exports = 'ng-sortable';
  }
  else if (window.angular && window.Sortable) {
    factory(angular, Sortable);
  }
})(function (angular, Sortable) {
  'use strict';


  /**
   * @typedef   {Object}        ngSortEvent
   * @property  {*}             model      List item
   * @property  {Object|Array}  models     List of items
   * @property  {number}        oldIndex   before sort
   * @property  {number}        newIndex   after sort
   */

  var expando = 'Sortable:wisboo-sortable';

  angular.module('wisboo-sortable', [])
    .constant('wisbooSortableVersion', '0.1')
    .constant('wisbooSortableConfig', {})
    .directive('wisbooSortable', [
      '$parse', 'wisbooSortableConfig',
      function ($parse, config) {
        var removed,
            nextSibling;
        return {
          restrict: 'A',
          scope: {
            wisbooSortable: '=?',
            collection: '=ngModel'
          },
          link(scope, $el) {
            var el = $el[0],
              options = angular.extend(scope.wisbooSortable || {}, config),
              watchers = [],
              offDestroy,
              sortable
            ;

            el[expando] = scope.collection;

            function _emitEvent(/**Event*/evt, /*Mixed*/item) {
              var name = 'on' + evt.type.charAt(0).toUpperCase() + evt.type.substr(1);
              var source = scope.collection;

              /* jshint expr:true */
              options[name] && options[name]({
                model: item || source[evt.newIndex],
                models: source,
                oldIndex: evt.oldIndex,
                newIndex: evt.newIndex,
                moved: evt.from !== evt.to,
                originalEvent: evt
              });
            }


            function _sync(/**Event*/evt) {
              var items = scope.collection;

              if (!items) {
                return;
              }

              var oldIndex = evt.oldIndex,
                newIndex = evt.newIndex;

              if (el !== evt.from) {
                var prevItems = evt.from[expando];

                removed = prevItems[oldIndex];

                prevItems.splice(oldIndex, 1);
                items.splice(newIndex, 0, removed);

                evt.from.insertBefore(evt.item, nextSibling); // revert element
              }
              else {
                items.splice(newIndex, 0, items.splice(oldIndex, 1)[0]);

                // move ng-repeat comment node to right position
                if (nextSibling.nodeType === Node.COMMENT_NODE) {
                  evt.from.insertBefore(nextSibling, evt.item.nextSibling);
                }
              }

              scope.$apply();
            }

            function _destroy() {
              offDestroy();

              angular.forEach(watchers, function (/** Function */unwatch) {
                unwatch();
              });

              sortable.destroy();

              el[expando] = null;
              el = null;
              watchers = null;
              sortable = null;
              nextSibling = null;
            }


            // Initialization
            sortable = Sortable.create(el, Object.keys(options).reduce(function (opts, name) {
              opts[name] = opts[name] || options[name];
              return opts;
            }, {
              onStart: function (/**Event*/evt) {
                nextSibling = evt.from === evt.item.parentNode ? evt.item.nextSibling : evt.clone.nextSibling;
                _emitEvent(evt);
                scope.$apply();
              },
              onEnd: function (/**Event*/evt) {
                _emitEvent(evt, removed);
                scope.$apply();
              },
              onAdd: function (/**Event*/evt) {
                _sync(evt);
                _emitEvent(evt, removed);
                scope.$apply();
              },
              onUpdate: function (/**Event*/evt) {
                _sync(evt);
                _emitEvent(evt);
              },
              onRemove: function (/**Event*/evt) {
                _emitEvent(evt, removed);
              },
              onSort: function (/**Event*/evt) {
                _emitEvent(evt);
              }
            }));

            // Create watchers for `options`
            angular.forEach([
              'sort', 'disabled', 'draggable', 'handle', 'animation', 'group', 'ghostClass', 'filter',
              'onStart', 'onEnd', 'onAdd', 'onUpdate', 'onRemove', 'onSort', 'onMove', 'onClone', 'setData'
            ], function (name) {
              watchers.push(scope.$watch('wisbooSortable.' + name, function (value) {
                if (value !== void 0) {
                  options[name] = value;

                  if (!/^on[A-Z]/.test(name)) {
                    sortable.option(name, value);
                  }
                }
              }));
            });

            offDestroy = scope.$on('$destroy', _destroy);

          }
        };
      }
    ]);
});
