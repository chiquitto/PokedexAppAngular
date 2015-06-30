app.directive('tipos', function() {
    var linkFunction = function(scope, element, attributes) {
        //scope.id = attributes.htmlId.trim();
    };

    return {
        controller: function($scope, $state) {
            $scope.pokemonPorTipo = function(id) {
                $state.go('app.pokemonsType', {typeId:id});
            };
        },
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'templates/tiposDirective.html',
        scope: {
            htmlId: '@',
            types: '=',
        },
        link: linkFunction
    };
});