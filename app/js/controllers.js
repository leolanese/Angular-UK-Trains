define(['angular', 'services'], function (angular) {
	'use strict';

	/* Controllers */


    return angular.module('myTestApp.controllers', ['myTestApp.services'])

        /*
         The longhand version protects from minification because the angular
         is now looking at the strings in the array for dependency injection and strings don’t get minified:

         http://jsfiddle.net/leolanese/hykG3/
         */
        .controller('titleCtrl',['$scope', 'version' , function ($scope, v) {

            $scope.t0 = "Test - Leo Lanese";

            $scope.classVar = "bold";

            $scope.appSettings = v;

        }])

        /*
        .controller('MainController',['$scope', '$http', function($scope,$http) {
            $scope.getFromAPI = function() {
                $http.get('https://api.github.com/users/angular')
                    .success(function(data, status, headers, config){
                        // success
                        console.log('success',status)
                        console.log(data)
                    })
                    .error(function(data, status, headers, config){
                        // error
                        console.log('error!',status)
                        console.log(data)
                    })
            }
        }])
        */


        .controller('styleCtrl',['$scope', function ($scope) {

            $scope.t100 = "Trains from Bishops Stortford";

            $scope.classVar = "classvar";

        }])

        .controller('toggleclass',['$scope', function ($scope) {

            $scope.classVar = "color";

        }])

        .controller('startController', ['$scope', 'labAPIservice', function($scope, labAPIservice) {
            // Each place where controller is applied has different scope.
            $scope.nameFilter = null;
            $scope.startList = [];

            $scope.fontloader = function(){

                // multiple @fonts loader
                WebFont.load({
                    google: {
                        families: ['Roboto']
                    }
                });

            };

            Modernizr.load({
                test: Modernizr.fontface,
                yep : $scope.fontloader(),
                nope: '/path-to/old-css-attributes.css' // If NOT, load this instead
            });


        }])

        .controller('startControllerGo', ['$scope', 'labAPIservice', function($scope, labAPIservice) {
            // Each place where controller is applied has different scope.
            $scope.nameFilter = null;
            $scope.startList = [];


            labAPIservice.caca($scope.id).success(function (response) {

                // Digging into the response to get the relevant JSON data
                $scope.startList = response;

                // assigning a unicque value
                $scope.driver = response.name;

                console.log("$scope.startList", $scope.startList);
                console.log(response);

                console.log(response.departures.all);
                console.log(response.departures.all[0].destination_name);
                console.log(response.departures.all[0].platform);
                console.log(response.departures.all[0].aimed_departure_time);

                // console.log(response.main.temp, response.main.temp_min, response.main.temp_max);
                // console.log(response.main.pressure);
                // console.log(response.main.humidity);

            });

        }])


        .controller('startControllerReturn', ['$scope', 'labAPIservice', function($scope, labAPIservice) {
            // Each place where controller is applied has different scope.
            $scope.nameFilter = null;
            $scope.startList = [];



            labAPIservice.caca2($scope.id).success(function (response) {

                // Digging into the response to get the relevant JSON data
                $scope.startList = response;

                // assigning a unicque value
                $scope.driver = response.name;

                console.log("$scope.startList", $scope.startList);
                console.log(response);

                console.log(response.departures.all);
                console.log(response.departures.all[0].destination_name);
                console.log(response.departures.all[0].platform);
                console.log(response.departures.all[0].aimed_departure_time);

                // console.log(response.main.temp, response.main.temp_min, response.main.temp_max);
                // console.log(response.main.pressure);
                // console.log(response.main.humidity);

            });

        }])


        .controller('cityController'['$scope', function($scope, $routeParams, labAPIservice) {
            $scope.id = $routeParams.id;

            labAPIservice.caca($scope.id).success(function (response) {
                $scope.startList = response;

                console.log("$scope.startList", $scope.startList);

            });

        }])

        .controller('MyCtrl1', ['$scope', function($scope) {

            $scope.t1 = "This is the partial for view 1";

        }])





        // handling the JSONP
        .controller('JSONCtrl',['$scope', function ($scope, labAPIservice) {

            $scope.t0 = "Trains - Leo Lanese";
            // include BOLD content style?

        }])


        .controller('footerController', ['$scope', function($scope) {
            $scope.f1 = {
                n1: 'www.leolanese.com',
                a1: '@leolaneseltd' };
        }])


});