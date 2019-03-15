angular.module('nestedApp', ['ng-sortable'])
.component('nestedDragAndDropExample', {
  template: `<ul id='main-list' ng-sortable="$ctrl.sortableConf">
            <li ng-repeat="item in $ctrl.items" >
                <span id={{item.name}}> {{ item.name }} </span>
                <div ng-if="item.items">
                  <ul class='nested-list' ng-sortable="$ctrl.nestedSortableConf">
                    <li ng-repeat="subitem in item.items" >
                        <span id={{subitem.name}}> {{ subitem.name }} </span>
                    </li>
                  </ul>
                </div>
            </li>
        </ul>`,
  controller: class ExampleAppController {
    constructor() {
      var _this = this;
      this.items = [{
        name: 'item1',
        items: [
          {
            name: 'subitem1',
          }
        ]
      },
      {
        name: 'item2',
      },
      {
        name: 'item3'
      }]
      this.onEnd = function(event) {
          _this.lastDragged = event.model;
      }

      this.sortableConf = {
        group: 'all',
        forceFallback: true,
        onEnd: this.onEnd
      }
      this.nestedSortableConf = {
        group: 'all',
        forceFallback: true,
        onEnd: this.onEnd
      }
    }
  },
})
