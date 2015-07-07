app.controller('TypesCtrl', function ($scope, $state) {

    $scope.types = _.sortBy(pokedex.getTypes().slice(1), 'identifier');

});