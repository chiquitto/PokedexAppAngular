app.directive('pokemonType', function() {
    var linkFunction = function(scope, element, attributes) {
        //scope.id = attributes.htmlId.trim();
        //console.log(attributes);
        
        if (attributes.abbr == '1') {
            scope.typeIdentifier = scope.type.getIdentifierAbbr();
        }
        else {
            scope.typeIdentifier = scope.type.getIdentifier();
        }
    };

    return {
        controller: function($scope, $state) {
            $scope.pokemonPorTipo = function(id) {
                $state.go('app.type', {typeId:id});
            };
        },
        restrict: 'E',
        replace: true,
        //transclude: true,
        templateUrl: 'templates/pokemonTypeDirective.html',
        scope: {
            size: '@',
            type: '=',
        },
        link: linkFunction
    };
});