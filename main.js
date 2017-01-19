angular
   .module('anguweather', ['ngRoute'])
   .config(($routeProvider) => {
      $routeProvider
         .when('/', {
            controller : 'rootCtrl',
            templateUrl: '/app/partials/root.html'
         })
         .when('/weather/:zipcode', {
            controller: 'weatherCtrl',
            templateUrl: '/app/partials/weather.html'
         })
   })

   .controller('rootCtrl', function ($scope, $location) {
      console.log('___welcome to the root controller___')
      $scope.findWeather = () => $location.path(`/weather/${$scope.zipInput}`)
   })

   .controller('weatherCtrl', function ($http, $routeParams) {
      console.log('___welcome to the weather controller___')
      $http.get(`http://api.wunderground.com/api/8568cf62bf879e71/conditions/q/${routeparams.zipInput}.json`)
         .then
   })
