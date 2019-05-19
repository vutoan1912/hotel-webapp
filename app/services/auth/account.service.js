(function() {
    'use strict';

    angular
        .module('thientaidoanchuApp')
        .factory('Account', Account);

    Account.$inject = ['$resource','API_URL','$localStorage','$sessionStorage','AuthServerProvider', '$http'];

    function Account ($resource, API_URL, $localStorage, $sessionStorage, AuthServerProvider, $http) {

        var service = {
            getAccount: getAccount
        };

        return service;

        function getAccount () {

            //get token from $localStorage
            var token = $localStorage.authenticationToken || $sessionStorage.authenticationToken;
            //console.log(token);

            var req = {
                method: 'GET',
                url: API_URL + 'api/users/get-current-user-login',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                data: {}
            }

            return $http(req).then(function(data){
                //console.log(data);
                return data;
            }, function(error){
                //console.log(error)
                return error;
            });
        }
    }
})();
