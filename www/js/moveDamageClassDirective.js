app.directive('moveDamageClass', function() {
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
        //transclude: true,
        templateUrl: 'templates/moveDamageClassDirective.html',
        scope: {
            damageClass: '=',
        },
        link: linkFunction
    };
});