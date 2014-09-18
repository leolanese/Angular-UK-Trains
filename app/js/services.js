define(['angular'], function (angular) {
	'use strict';
	
  /* Services */

  // Demonstrate how to register services
  // In this case it is a simple value service.
  angular.module('myTestApp.services', []) // add service to the module

        .constant('version', { // not available on the config
            title: 'Leo Lanese Test',
            version: '1'
        })

        .factory('labAPIservice', function($http) {
        "use strict";

        var factory = {};

        factory.caca = function() {
            return $http({
                method: 'JSONP',
                url: 'http://transportapi.com/v3/uk/train/station/BIS/live.json?api_key=XXX&app_id=32c7f622&callback=JSON_CALLBACK'
            });
        };


      factory.caca2 = function() {
          return $http({
              method: 'JSONP',
              url: 'http://transportapi.com/v3/uk/train/station/LST/live.json?api_key=XXX&app_id=32c7f622&callback=JSON_CALLBACK'
          });
      };

        return factory;
    })



});
