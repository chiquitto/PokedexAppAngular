app.controller('PokemonMoveCtrl', function ($scope, $stateParams, $state, $ionicHistory) {
    var id = $stateParams.id - 1;

    $scope.pokemon = {
        id: window.pokemons[id].id,
        identifier: window.pokemons[id].identifier,
        lvMoves: [],
        eggMoves: [],
        itemMoves: [],
        tutorMoves: []
    };

    var i, max;

    max = mt_rand(5, 15);
    for (i = 0; i < max; i++) {
        $scope.pokemon.lvMoves.push({
            id: i,
            identifier: window.moves[i].identifier,
            type: {
                id: window.moves[i].type_id,
                identifier: window.types[window.moves[i].type_id],
            },
            power: window.moves[i].power,
            accuracy: window.moves[i].accuracy,
            pp: window.moves[i].pp,
        });
    }

});

