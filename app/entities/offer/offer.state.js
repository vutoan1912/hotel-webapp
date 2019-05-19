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
            }
        });
    }
})();
