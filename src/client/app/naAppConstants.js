angular.module(APP_MODULE_NAME)
    .value('PROJECT_INFO', (function () {
    })()).constant('ROUTE_PATTERNS', {
        'DASHBOARD': {
            'STATE': 'StudentRegistration',
            'URL': '/StudentRegistration'
        }
    }).constant('EVENTS', {
        'HTTP': {
            'SUCCESS': 'EVENT_HTTP_SUCCESS',
            'ERROR': 'EVENT_HTTP_ERROR'
        }
    });