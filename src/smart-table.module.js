ng.module('smart-table', []).run(['$templateCache', function ($templateCache) {
    $templateCache.put('template/smart-table/pagination.html',
        '<nav ng-if="numPages && pages.length >= 2"><ul class="pagination">' +
        '<li ng-class="{active: 1==currentPage}"><a href="#" ng-click="selectPage(1); $event.preventDefault(); $event.stopPropagation();">First</a></li>' +
        '<li ng-class="{}"><a href="#" ng-click="selectPage(currentPage - 1); $event.preventDefault(); $event.stopPropagation();">Prev</a></li>' +
        '<li ng-repeat="page in pages" ng-class="{active: page==currentPage}"><a href="#" ng-click="selectPage(page); $event.preventDefault(); $event.stopPropagation();">{{page}}</a></li>' +
        '<li ng-class="{}"><a href="#" ng-click="selectPage(currentPage + 1); $event.preventDefault(); $event.stopPropagation();">Next</a></li>' +
        '<li ng-class="{active: last-1==currentPage}"><a href="#" ng-click="selectPage(last-1); $event.preventDefault(); $event.stopPropagation();">Last</a></li>' +
        '</ul></nav>');
}]);

