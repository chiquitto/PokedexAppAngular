app.controller('MovesCtrl', function ($scope, $state, $cordovaSQLite) {
    
    $scope.moves = pokedex.getMoves().slice(1);

    $scope.verMove = function (move) {
        //$state.go('app.move', {id: move.id});
    };
});