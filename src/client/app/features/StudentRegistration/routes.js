(function () {
    'use strict';

    angular
        .module(APP_MODULE_NAME)
        .config(Config);

    Config.$inject = ['$stateProvider', 'ROUTE_PATTERNS'];
    function Config($stateProvider, ROUTE_PATTERNS) {
        $stateProvider
            .state(ROUTE_PATTERNS.DASHBOARD.STATE, {
                url: ROUTE_PATTERNS.DASHBOARD.URL,
                controller: 'StudentRegistrationCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/features/StudentRegistration/studentReg.html'
            });
    }
})();
