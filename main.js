angular
   .module('anguweather', ['ngRoute'])
   .config(($routeProvider) => {
      $routeProvider.when('/', {
         controller : 'rootCtrl',
         templateUrl: '/partials/root.html'
      }
   })

   .controller('rootCtrl', function () {
      console.log('___welcome to the root controller___')
   })
