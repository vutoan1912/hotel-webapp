(function() {
    'use strict';

    angular
        .module('thientaidoanchuApp')
        .controller('BlogController', BlogController);


    BlogController.$inject = ['$scope', 'Principal', 'MEDIA_SERVER', '$translate', '$timeout', '$localStorage', '$sessionStorage', 'API_URL', '$http', 'QUESTION_CONTENT'];

    function BlogController ($scope, Principal, MEDIA_SERVER, $translate, $timeout, $localStorage, $sessionStorage, API_URL, $http, QUESTION_CONTENT) {

        var vm = this;

    }
})();
