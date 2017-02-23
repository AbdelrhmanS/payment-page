
    angular
        .module('payment')
        .directive('navBar', navbar);

    /** @ngInject */
    function navbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'views/navbar.html',
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController() {
            console.log('NavbarController');
        }
    }