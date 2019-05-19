(function() {
    'use strict';

    angular
        .module('thientaidoanchuApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('home', {
            parent: 'app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('home');
                    return $translate.refresh();
                }],
                load: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load([
                        'content/plugins/OwlCarousel2-2.2.1/owl.carousel.css',
                        'content/plugins/OwlCarousel2-2.2.1/owl.theme.default.css',
                        'content/plugins/OwlCarousel2-2.2.1/animate.css',
                        'content/styles/main_styles.css',
                        'content/styles/responsive.css'
                    ]);
                }]
            }
        });
    }
})();
