app.controller('TypeCtrl', function ($scope, $state) {
    
    $scope.type = pokedex.getType($state.params.typeId);
    
    $scope.viewPokemons = function (typeId) {
        $state.go('app.pokemons', {
            typeId: $state.params.typeId,
        });
    };
    
    $scope.viewMoves = function (typeId) {
        $state.go('app.moves', {
            typeId: $state.params.typeId,
        });
    };
    
});