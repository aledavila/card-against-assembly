(function() {

  var app = angular.module('CardsAgainstAssembly');
  app.directive('card', cardView);

  function cardView() {
    var directive = {};
    directive.restrict = 'E';
    directive.replace = true;
    directive.templateUrl = "/templates/_cardView.html";
    directive.scope = {
      question: '@'
    };
    return directive;
  };

}());
