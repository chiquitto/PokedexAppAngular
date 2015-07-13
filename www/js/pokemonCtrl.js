app.controller('PokemonCtrl', ['$scope', '$stateParams', 'stateGoto',
    function ($scope, $stateParams, stateGoto) {

        $scope.selectedIndex = 0;
        $scope.onSwipeLeft = function (ev) {
            if ($scope.selectedIndex == 5) {
                return;
            }
            $scope.selectedIndex++;
        };
        $scope.onSwipeRight = function (ev) {
            if ($scope.selectedIndex == 0) {
                return;
            }
            $scope.selectedIndex--;
        };

        /*$scope.verPokemon = function (pokemon) {
            stateGoto.pokemon({pokeId: pokemon.getId()});
        };*/

        var pokeId = $stateParams.pokeId;

        $scope.pokemon = pokedex.getPokemon(pokeId);

        /*$scope.efficaciesInDefense = $scope.pokemon.getEfficaciesInDefense();
        _.map($scope.efficaciesInDefense, function (item) {
            item.type = pokedex.getType(item.damage_type_id);
        });*/

    }]);
