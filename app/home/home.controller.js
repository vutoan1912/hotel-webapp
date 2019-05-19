(function() {
    'use strict';

    angular
        .module('thientaidoanchuApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state'];

    function HomeController ($scope, $state) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.popupShow = false;

        vm.popupShowHide = popupShowHide;

        function popupShowHide() {
            vm.popupShow = !vm.popupShow;
        }
    }
})();
