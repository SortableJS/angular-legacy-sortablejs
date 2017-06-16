angular.module('exampleApp', ['ng-sortable'])
.component('dragAndDropExample', {
  template: `<ul ng-sortable="$ctrl.sortableConf">
            <li ng-repeat="item in $ctrl.items" style="display: inline-block; width: 100px; height: 20px; background: red; font-size: 1rem; outline: 1px solid yellow;">
                <span id={{item}}> {{ item }}</span>
            </li>
        </ul>`,
  controller: class ExampleAppController {
    constructor() {
      this.items = ['burgers', 'chips', 'hotdog', 'icecream']
      this.sortableConf = {
        forceFallback: true,
        onStart: this.onStart,
        onMove: this.onMove,
      }
    }
  },
})
