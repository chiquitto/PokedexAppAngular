app.directive('tipos', function() {
    var linkFunction = function(scope, element, attributes) {
        //scope.id = attributes.htmlId.trim();
        //scope.types = 
        //console.log(attributes);
    };

    return {
        controller: function($scope, $state) {
            
        },
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'templates/tiposDirective.html',
        scope: {
            htmlId: '@',
            types: '=',
        },
        link: linkFunction
    };
});