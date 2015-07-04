app.controller('PokemonCtrl', function ($scope, $stateParams, $state, $ionicHistory) {
    /*$ionicHistory.clearHistory();
     $ionicHistory.nextViewOptions({
     disableAnimate: false,
     disableBack: true
     });*/

    $scope.viewMoves = function (id) {
        $state.go('app.pokemonMove', {id: id});
    }

    var id = $stateParams.id;

    $scope.pokemon = pokedex.getPokemon(id);
    
    $scope.efficaciesInDefense = $scope.pokemon.calcEfficaciesInDefense();
    
    _.map($scope.efficaciesInDefense, function(item) {
        item.type = pokedex.getType(item.damage_type_id);
    })

});

