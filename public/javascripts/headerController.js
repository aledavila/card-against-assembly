(function() {
    // When only the name of the module is passed in,
    // the 'module' method returns the specified module.
    var app = angular.module('CardsAgainstAssembly');

    // This is the function definition for our controller.
    // Note that we capitalize it as it is used as a constructor function!
    app.controller('HeaderController', function($scope){
       $scope.title = "Cards Against Assembly"
    });
})();
