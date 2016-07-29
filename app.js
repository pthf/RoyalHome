var app = angular.module('app', [
                                  'rhome.directives',
                                  'angular-parallax',
                                  'ngMap'
                              ]);

app.run(function($rootScope, $timeout, $anchorScroll) {
    console.log('starting run');
});
