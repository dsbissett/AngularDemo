(function() {
    'use strict';

    var app = angular.module('demo1', []);

    app.controller('controller1', ['superService', function (superService) {
        this.firstName = '',
        this.lastName = '',
        this.set = function() {
            superService.set({ firstName: this.firstName, lastName: this.lastName });
        }
    }]);

    app.controller('controller2', ['superService', function (superService) {
        this.city = '',
        this.state = '',
        this.set = function() {
            superService.set({ city: this.city, state: this.state });
        }
    }]);

    app.controller('controller3', ['superService', function (superService) {
        this.email = '',
        this.phoneNumber = '';
        this.set = function() {
            superService.set({ email: this.email, phoneNumber: this.phoneNumber });
        }
    }]);

    app.service('superService', function() {
        this.privateArray = [];

        this.get = function () {
            return this.privateArray;
        },
        this.set = function (e) {
            debugger;
            this.privateArray.push(e);
        }
    });

    app.directive('superClickThing', ['superService', function(superService) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                element.bind('click', function(e) {
                    var result = superService.get();

                    $('#codeBody').html(JSON.stringify(result));
                });
            }
        }
    }]);
}())