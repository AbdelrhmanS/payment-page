var app = angular.module('payment',['ui.router','angularPayments']);

   angular
        .module('payment')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/content.html',
                controller: 'MainController'
            })
            .state('payment', {
  
                url: '/payment',
                templateUrl: 'views/payment.html',
                controller: 'PaymentController'
            });

        $urlRouterProvider.otherwise('/');
    }

angular.module('payment').controller('MainController',function(){
	console.log('MainController');
});


angular.module('payment').controller('PaymentController',function($scope){
	console.log('PaymentController');
    $scope.user={};
    $scope.submitForm=function(form){
        console.log(form);
        console.log($scope.user);
    }
});
