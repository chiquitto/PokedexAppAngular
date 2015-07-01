app.controller('PokemonsCtrl', function ($scope, $state, $cordovaSQLite) {
    
    $scope.pokemons = pokedex.getPokemons().slice(1);

    $scope.verPokemon = function (pokemon) {
        $state.go('app.pokemon', {id: pokemon.getId()});
    };
});