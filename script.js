'use strict';

angular.module('heimdall', [])

.controller('MainCtrl', function($scope){
})
.directive('starsRating', function() {
  return {
    scope: {
      rate: '=rate'
    },
    template: function() {

      return '<div><span ng-repeat="star in [1,2,3]">*</span></div>';
    }
  };
})
.directive('colorSquare', function() {
  return {
    scope: {
      color: '='
    },
    template: '<div style="width: 50px; height: 50px; background-color: blue"></div>'
  }
});