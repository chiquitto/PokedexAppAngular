app.directive('pokemonType', function() {
    var linkFunction = function(scope, element, attributes) {
        //scope.id = attributes.htmlId.trim();
        //scope.types = 
        //console.log(attributes);
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
        templateUrl: 'templates/pokemonTypeDirective.html',
        scope: {
            type: '=',
        },
        link: linkFunction
    };
});