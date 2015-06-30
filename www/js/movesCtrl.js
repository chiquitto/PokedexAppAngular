app.controller('MovesCtrl', function ($scope, $state, $cordovaSQLite) {
    
    $scope.moves = window.moves;

    $scope.verMove = function (move) {
        //$state.go('app.move', {id: move.id});
    };
});