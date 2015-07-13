app.controller('PokemonTabEvolutionCtrl', ['$scope', '$stateParams', 'stateGoto', function ($scope, $stateParams, stateGoto) {
        var pokeId = $stateParams.pokeId;

        $scope.verPokemon = function (pokemon) {
            stateGoto.pokemon({pokeId: pokemon.getId()});
        };

        $scope.pokemon = pokedex.getPokemon(pokeId);
    }]);
