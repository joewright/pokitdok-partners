angular.module('pokitPartners')
  .service('Partners', function($http) {
    var Service = {};
    Service.load = function(id) {
      var route = '/trading-partners';
      if (id) {
        route += '/' + id;
      }
      return $http.get(route);
    };
    return Service;
  });