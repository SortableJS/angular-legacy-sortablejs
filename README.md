# THIS PROJECT NEEDS A MAINTAINER.

angular-legacy-sortable
-----------------------

Demo: http://jsbin.com/naduvo/1/edit?html,js,output

```html
<div ng-app="myApp" ng-controller="demo">
	<ul ng-sortable>
		<li ng-repeat="item in items">{{item}}</li>
	</ul>

	<ul ng-sortable="{ group: 'foobar' }">
		<li ng-repeat="item in foo">{{item}}</li>
	</ul>

	<ul ng-sortable="barConfig">
		<li ng-repeat="item in bar">{{item}}</li>
	</ul>
</div>
```


```js
angular.module('myApp', ['ng-sortable'])
	.controller('demo', ['$scope', function ($scope) {
		$scope.items = ['item 1', 'item 2'];
		$scope.foo = ['foo 1', '..'];
		$scope.bar = ['bar 1', '..'];
		$scope.barConfig = {
			group: 'foobar',
			animation: 150,
			onSort: function (/** ngSortEvent */evt){
				// @see angular-legacy-sortable.js#L18-L24
			}
		};
	}]);
```

