app.controller('PokemonCtrl', function ($scope, $stateParams, $state, $ionicHistory) {
    /*$ionicHistory.clearHistory();
     $ionicHistory.nextViewOptions({
     disableAnimate: false,
     disableBack: true
     });*/

    $scope.viewMoves = function (id) {
        $state.go('app.pokemonMove', {id: id});
    };
    
    $scope.verPokemon = function (pokemon) {
        $state.go('app.pokemon', {id: pokemon.getId()});
    };
    
    var id = $stateParams.id;

    $scope.pokemon = pokedex.getPokemon(id);
    
    $scope.efficaciesInDefense = $scope.pokemon.getEfficaciesInDefense();
    _.map($scope.efficaciesInDefense, function(item) {
        item.type = pokedex.getType(item.damage_type_id);
    })

});

