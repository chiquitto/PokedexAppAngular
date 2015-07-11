app.controller('PokemonCtrl', ['$scope', '$stateParams', 'stateGoto',
    function ($scope, $stateParams, stateGoto) {

        $scope.viewMoves = function (id) {
            stateGoto.pokemonMoves({pokeId: id});
        };

        $scope.verPokemon = function (pokemon) {
            stateGoto.pokemon({pokeId: pokemon.getId()});
        };

        var pokeId = $stateParams.pokeId;

        $scope.pokemon = pokedex.getPokemon(pokeId);

        $scope.efficaciesInDefense = $scope.pokemon.getEfficaciesInDefense();
        _.map($scope.efficaciesInDefense, function (item) {
            item.type = pokedex.getType(item.damage_type_id);
        })

    }]);
