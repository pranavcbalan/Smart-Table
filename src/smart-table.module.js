ng.module('smart-table', []).run(['$templateCache', function ($templateCache) {
    $templateCache.put('template/smart-table/pagination.html',
        '<nav ng-if="numPages && pages.length >= 2"><ul class="pagination">' +
        '<li ng-hide="true" ng-class="{active: 1==currentPage}"><a href="#" ng-click="selectPage(1); $event.preventDefault(); $event.stopPropagation();">First</a></li>' +
        '<li ng-show="currentPage - pages.length > 0" ng-class="{}"><a href="#" ng-click="selectPage(currentPage - pages.length); $event.preventDefault(); $event.stopPropagation();">Prev</a></li>' +
        '<li ng-repeat="page in pages" ng-class="{active: page==currentPage}"><a href="#" ng-click="selectPage(page); $event.preventDefault(); $event.stopPropagation();">{{page}}</a></li>' +
        '<li ng-show="currentPage + pages.length <= numPages" ng-class="{}"><a href="#" ng-click="selectPage(currentPage + pages.length); $event.preventDefault(); $event.stopPropagation();">Next</a></li>' +
        '<li ng-hide="true" ng-class="{active: numPages == currentPage}"><a href="#" ng-click="selectPage(numPages); $event.preventDefault(); $event.stopPropagation();">Last</a></li>' +
        '</ul></nav>');
}]);

