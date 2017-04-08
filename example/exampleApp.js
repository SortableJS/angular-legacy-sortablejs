angular.module('exampleApp', ['ng-sortable'])
.component('dragAndDropExample', {
    template: `<ul ng-sortable>
            <li ng-repeat="item in ['burgers', 'chips', 'hotdog', 'icecream']" id={{item}}>
                <span>{{ item }}</span>
            </li>
        </ul>`,
  })
