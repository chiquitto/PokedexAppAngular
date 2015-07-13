app.controller('PokemonTabTypeCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
        var id = $stateParams.pokeId;

        $scope.pokemon = pokedex.getPokemon(id);

        $scope.efficaciesInDefense = $scope.pokemon.getEfficaciesInDefense();
        _.map($scope.efficaciesInDefense, function (item) {
            item.type = pokedex.getType(item.damage_type_id);
        });
    }]);
