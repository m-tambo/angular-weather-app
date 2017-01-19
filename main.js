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

   .controller('weatherCtrl', function ($scope) {
         console.log('___welcome to the weather controller___')
      })
