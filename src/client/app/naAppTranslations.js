(function () {
    'use strict';

    angular.module(APP_MODULE_NAME)
        .config(Config);

    Config.$inject = ['$translateProvider'];
    function Config($translateProvider) {
        $translateProvider.translations('en', {
            'STUDENT_REGISTRATION': 'Student Information',
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy(null);
    }
})();