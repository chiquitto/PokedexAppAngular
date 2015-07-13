app.controller('PokemonTabBasicCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    var id = $stateParams.pokeId;

    $scope.pokemon = pokedex.getPokemon(id);
}]);
