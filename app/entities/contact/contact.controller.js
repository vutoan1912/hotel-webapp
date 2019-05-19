(function() {
    'use strict';

    angular
        .module('thientaidoanchuApp')
        .controller('ContactController', ContactController);


    ContactController.$inject = ['$scope', 'Principal', 'MEDIA_SERVER', '$translate', '$timeout', '$localStorage', '$sessionStorage', 'API_URL', '$http', 'QUESTION_CONTENT'];

    function ContactController ($scope, Principal, MEDIA_SERVER, $translate, $timeout, $localStorage, $sessionStorage, API_URL, $http, QUESTION_CONTENT) {

        var vm = this;

    }
})();
