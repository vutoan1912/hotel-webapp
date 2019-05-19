(function() {
    'use strict';

    angular
        .module('thientaidoanchuApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('blog', {
            parent: 'app',
            url: '/blog',
            data: {
                authorities: [],
                pageTitle: 'blog'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/blog/blog.html',
                    controller: 'BlogController',
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
