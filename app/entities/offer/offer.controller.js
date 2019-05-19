(function() {
    'use strict';

    angular
        .module('thientaidoanchuApp')
        .controller('OfferController', OfferController);


    OfferController.$inject = ['$scope', 'Principal', 'MEDIA_SERVER', '$translate', '$timeout', '$localStorage', '$sessionStorage', 'API_URL', '$http', 'QUESTION_CONTENT'];

    function OfferController ($scope, Principal, MEDIA_SERVER, $translate, $timeout, $localStorage, $sessionStorage, API_URL, $http, QUESTION_CONTENT) {

        var vm = this;

    }
})();
