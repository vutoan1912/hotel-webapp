(function() {
    'use strict';

    angular
        .module('thientaidoanchuApp')
        .controller('DetailController', DetailController);


    DetailController.$inject = ['$scope', 'Principal', 'MEDIA_SERVER', '$translate', '$timeout', '$localStorage', '$sessionStorage', 'API_URL', '$http', 'QUESTION_CONTENT'];

    function DetailController ($scope, Principal, MEDIA_SERVER, $translate, $timeout, $localStorage, $sessionStorage, API_URL, $http, QUESTION_CONTENT) {

        var vm = this;

    }
})();
