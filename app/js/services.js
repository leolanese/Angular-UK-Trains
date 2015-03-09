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

          // register and get your personal apu_key and app_id
          // enter your ?api_key=XXX&app_id=XXX&callback=JSON_CALLBACK
        factory.caca = function() {
            return $http({
                method: 'JSONP',
                url: 'http://transportapi.com/v3/uk/train/station/BIS/live.json'
            });
        };

          // register and get your personal apu_key and app_id
          // enter your ?api_key=XXX&app_id=XXX&callback=JSON_CALLBACK
          factory.caca2 = function() {
              return $http({
                  method: 'JSONP',
                  url: 'http://transportapi.com/v3/uk/train/station/LST/live.json'
              });
          };

        return factory;
    })



});
