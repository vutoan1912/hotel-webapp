(function() {
    'use strict';

    angular
        .module('thientaidoanchuApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('offer', {
            parent: 'app',
            url: '/offer',
            data: {
                authorities: [],
                pageTitle: 'offer'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/offer/offer.html',
                    controller: 'OfferController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
                // load: ['$ocLazyLoad', function($ocLazyLoad) {
                //     // you can lazy load files for an existing module
                //     return $ocLazyLoad.load([
                //         'content/styles/offers_styles.css',
                //         'content/styles/offers_responsive.css'
                //     ]);
                // }]
            }
        });
    }
})();
