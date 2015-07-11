app.controller('TypeCtrl', ['$scope', '$stateParams', 'stateGoto',
    function ($scope, $stateParams, stateGoto) {

        $scope.type = pokedex.getType($stateParams.typeId);

        $scope.viewPokemons = function () {
            stateGoto.pokemonsByType({typeId: $stateParams.typeId});
        };

        $scope.viewMoves = function (typeId) {
            stateGoto.pokemonsByType({typeId: $stateParams.typeId});
            
            $state.go('app.moves', {
                typeId: $state.params.typeId,
            });
        };

    }]);
