app.controller('PokemonsCtrl', ['$scope', 'stateGoto', function ($scope, stateGoto) {
    
    $scope.pokemons = pokedex.getPokemons().slice(1);

    $scope.verPokemon = function (pokemon) {
        stateGoto.pokemon({pokeId: pokemon.getId()});
    };
}]);