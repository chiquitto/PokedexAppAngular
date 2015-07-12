app.factory('stateGoto', ['$state', function ($state) {
        return {
            movesByType: function (o) {
                $state.go('app.moves');
            },
            pokemons: function () {
                $state.go('app.pokemons');
            },
            pokemonsByType: function (o) {
                $state.go('app.pokemons');
            },
            pokemon: function (o) {
                // $ionicHistory.clearHistory();
                // $ionicHistory.nextViewOptions({
                // disableAnimate: true,
                // disableBack: true,
                // historyRoot: true,
                //});

                //$state.go('app.pokemon', {pokeId: o.pokeId}, {location: 'replace'});
                $state.go('app.pokemon', {pokeId: o.pokeId});
            },
            pokemonMoves: function (o) {
                $state.go('app.pokemonMove', {pokeId: o.pokeId});
            },
            type: function (o) {
                $state.go('app.type', {typeId: o.typeId});
            },
        };
    }]);
