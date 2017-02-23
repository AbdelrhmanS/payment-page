
    angular
        .module('payment')
        .directive('dashBoard', navbar);

    /** @ngInject */
    function navbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'views/dashboard.html',
            controller: DashBoardController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function DashBoardController() {
        	console.log('Dashboard COntroller');
        }
    }