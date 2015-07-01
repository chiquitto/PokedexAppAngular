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
    $scope.pokemon.loadTypes();
    //console.log($scope.pokemon.getTypes());
    
    return ;

    var i = 0, i2;
    for (i = 0; i < 2; i++) {
        i2 = mt_rand(1, 18);
        $scope.pokemon.types.push({
            id: i2,
            identifier: Pokedex.getType(i2),
        });
    }
    for (i = 0; i < 5; i++) {
        i2 = mt_rand(1, 18);
        $scope.pokemon.weaknesses.push({
            id: i2,
            identifier: Pokedex.getType(i2),
            multiplier: mt_rand(1, 2) * 2,
        });
    }

});

