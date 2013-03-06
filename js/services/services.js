angular.module('cneeServices', ['ngResource']).factory('Folio', function($resource){
  return $resource('api/folios/:id', {}, {
    query: {method:'GET', isArray:true}
  });
});