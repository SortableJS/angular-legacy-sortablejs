angular-legacy-sortable
-----------------------

Angular 1 module that integrates with Sortable.js

# Installation

## Install with NPM
		npm install angular-legacy-sortablejs

# Examples

## Simple Drag and Drop
```
angular.module('exampleApp', [])
.component('dragAndDropExample', {
	template: `<ul ng-sortable>
		<li ng-repeat="item in ['burgers', 'chips', 'hotdog']">
			{$ item $}
		</li>
	</ul>`,
})
```

## Specifying a Config
You can pass a Config obj to `ng-sortable` and it will pass this onto the created sortable object. The available options can be found [here](https://github.com/RubaXa/Sortable#options)
```
angular.module('exampleApp', [])
.component('dragAndDropExample', {
	template: `<ul ng-sortable=$ctrl.sortableConf>
		<li ng-repeat="item in ['burgers', 'chips', 'hotdog']">
			{$ item $}
		</li>
	</ul>`,
	controller: function AppSidebarController() {
  	var ctrl = this;
		ctrl.sortableConf = {
				animation: 350,
				chosenClass: 'sortable-chosen',
				forceFallback: true,
		};
	},
})
```

# Drag handle
Example showing how use the handle option
```
angular.module('exampleApp', [])
.component('dragAndDropExample', {
	template: `<ul ng-sortable=$ctrl.sortableConf>
		<li ng-repeat="item in ['burgers', 'chips', 'hotdog']" draggable="false">
			<span class="grab-handle">Drag Header</span>
			<div>{$ item $}</div>
		</li>
	</ul>`,
	controller: function AppSidebarController() {
  	var ctrl = this;
		ctrl.sortableConf = {
				animation: 350,
				chosenClass: 'sortable-chosen',
				handle: '.grab-handle',
				forceFallback: true,
		};
	},
})
```
