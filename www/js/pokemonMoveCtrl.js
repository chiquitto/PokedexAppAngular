app.controller('PokemonMoveCtrl', function ($scope, $stateParams, $state, $ionicHistory, $mdSidenav) {
    var id = $stateParams.id;

    $scope.pokemon = pokedex.getPokemon(id);

    /*$scope.pokemon = {
        id: window.pokemons[id].id,
        identifier: window.pokemons[id].identifier,
        lvMoves: [],
        eggMoves: [],
        itemMoves: [],
        tutorMoves: []
    };*/

    

});

