app.controller('PokemonMoveCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory', '$mdSidenav', function ($scope, $stateParams, $state, $ionicHistory, $mdSidenav, tabsSwipable) {
    var id = $stateParams.pokeId;

    $scope.pokemon = pokedex.getPokemon(id);

    /*$scope.pokemon = {
        id: window.pokemons[id].id,
        identifier: window.pokemons[id].identifier,
        lvMoves: [],
        eggMoves: [],
        itemMoves: [],
        tutorMoves: []
    };*/

    

}]);

