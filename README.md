angular-legacy-sortable
-----------------------

Angular 1 module that integrates with Sortable.js

# Installation

## Install with NPM

    npm install angular-legacy-sortablejs-maintained

## Install with Yarn

    yarn add angular-legacy-sortablejs-maintained

Don't install the old angular-legacy-sortablejs package as thats not maintained

# Examples

## Simple Drag and Drop

```js
angular.module('exampleApp', ['ng-sortable'])
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

```js
angular.module('exampleApp', ['ng-sortable'])
  .component('dragAndDropExample', {
    template: `
    <ul ng-sortable=$ctrl.sortableConf>
      <li ng-repeat="item in ['burgers', 'chips', 'hotdog']">
        {$ item $}
      </li>
    </ul>`,
    controller: class ExampleController {
      constructor() {
        this.sortableConf = {
          animation: 350,
          chosenClass: 'sortable-chosen',
          handle: '.grab-handle',
          forceFallback: true,
        };
      }
    },
  });
```

# Drag handle
Example showing how use the handle option

```js
angular.module('exampleApp', ['ng-sortable'])
  .component('dragAndDropExample', {
    template: `
    <ul ng-sortable=$ctrl.sortableConf>
      <li ng-repeat="item in ['burgers', 'chips', 'hotdog']" draggable="false">
        <span class="grab-handle">Drag Header</span>
        <div>{$ item $}</div>
      </li>
   </ul>`,
   controller: class ExampleController {
      constructor() {
        this.sortableConf = {
          animation: 350,
          chosenClass: 'sortable-chosen',
          handle: '.grab-handle',
          forceFallback: true,
        };
      }
    },
  });
```

# Tests
There are selenium based tests that can be used to check for regressions

## Requirements
  - node
  - yarn

## Setting up tests
Navigate to the repo directory in a terminal and run

    yarn

## Running e2e tests

To run the e2e tests run each of these commands in a separate terminal window

```bash
npm run serve:example
```

```bash
npm run webdriver
```

```bash
npm run test:e2e
```
