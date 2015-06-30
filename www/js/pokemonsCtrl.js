app.controller('PokemonsCtrl', function ($scope, $state, $cordovaSQLite) {
    
    $scope.pokemons = window.pokemons;

    $scope.verPokemon = function (pokemon) {
        $state.go('app.pokemon', {id: pokemon.id});
    };
});