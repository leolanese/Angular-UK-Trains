define(['angular', 'app'], function(angular, app) {
    'use strict';

    return app.config(['$routeProvider', function($routeProvider, appSettings) {

        $routeProvider.when('/view1', {
            templateUrl: 'app/partials/partial1.html',
            controller: 'startController'
        });

        $routeProvider.when('/view2', {
            templateUrl: 'app/partials/partial2.html',
            controller: 'startControllerGo'
        });

        $routeProvider.when('/view3', {
            templateUrl: 'app/partials/partial3.html',
            controller: 'startControllerReturn'
        });

        $routeProvider.otherwise({
            redirectTo: '/view1'
        });


    }]);

});

