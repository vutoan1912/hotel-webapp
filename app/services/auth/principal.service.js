(function() {
    'use strict';

    angular
        .module('thientaidoanchuApp')
        .factory('Principal', Principal);

    Principal.$inject = ['$q', 'Account', 'JhiTrackerService'];

    function Principal ($q, Account, JhiTrackerService) {
        var _identity,
            _authenticated = false;

        var service = {
            authenticate: authenticate,
            hasAnyAuthority: hasAnyAuthority,
            hasAuthority: hasAuthority,
            identity: identity,
            isAuthenticated: isAuthenticated,
            isIdentityResolved: isIdentityResolved,
            getAccountInfo: getAccountInfo
        };

        return service;

        function authenticate (identity) {
            _identity = identity;
            _authenticated = identity !== null;
        }

        function hasAnyAuthority (authorities) {
            if (!_authenticated || !_identity || !_identity.authorities) {
                return false;
            }

            for (var i = 0; i < authorities.length; i++) {
                if (_identity.authorities.indexOf(authorities[i]) !== -1) {
                    return true;
                }
            }

            return false;
        }

        function hasAuthority (authority) {
            if (!_authenticated) {
                return $q.when(false);
            }

            return this.identity().then(function(_id) {
                return _id.authorities && _id.authorities.indexOf(authority) !== -1;
            }, function(){
                return false;
            });
        }

        function identity (force) {
            var deferred = $q.defer();

            if (force === true) {
                _identity = undefined;
            }

            //console.log($localStorage.authenticationToken)

            // check and see if we have retrieved the identity data from the server.
            // if we have, reuse it by immediately resolving
            if (angular.isDefined(_identity)) {
                deferred.resolve(_identity);

                return deferred.promise;
            }

            // retrieve the identity data from the server, update the identity object, and then resolve.
            //Account.getAccount().$promise.then(getAccountThen).catch(getAccountCatch);
            //return deferred.promise;

            Account.getAccount().then(getAccountThen).catch(getAccountCatch);
            return deferred.promise;

            function getAccountThen (response) {
                //console.log(response)
                if(response.status == 200){
                    _identity = response.data;
                    _authenticated = true;
                    deferred.resolve(_identity);
                    JhiTrackerService.connect();
                }else{
                    _identity = null;
                    _authenticated = false;
                    deferred.resolve(_identity);
                }
            }

            function getAccountCatch () {
                //console.log(_identity)
                _identity = null;
                _authenticated = false;
                deferred.resolve(_identity);
            }
        }

        function isAuthenticated () {
            //console.log(_authenticated)
            return _authenticated;
        }

        function isIdentityResolved () {
            return angular.isDefined(_identity);
        }

        function getAccountInfo () {
            //console.log(_identity)
            return _identity;
        }
    }
})();
