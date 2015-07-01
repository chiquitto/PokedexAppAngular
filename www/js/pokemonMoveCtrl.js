app.controller('PokemonMoveCtrl', function ($scope, $stateParams, $state, $ionicHistory) {
    var id = $stateParams.id - 1;
    
    console.log(id);

    $scope.pokemon = {
        id: window.pokemons[id].id,
        identifier: window.pokemons[id].identifier,
        types: [],
        weaknesses: [],
    };

});

