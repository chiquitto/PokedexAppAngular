var db = null;

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
app = angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova']);

app.run(function ($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

    });

});

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    });

    $stateProvider.state('app.pokemons', {
        url: "/pokemons",
        views: {
            'menuContent': {
                templateUrl: "templates/pokemons.html",
                controller: 'PokemonsCtrl'
            }
        }
    });

    $stateProvider.state('app.pokemon', {
        url: "/pokemon/:id",
        views: {
            'menuContent': {
                templateUrl: "templates/pokemon.html",
                controller: 'PokemonCtrl'
            }
        }
    });

    $stateProvider.state('app.pokemonMove', {
        url: "/pokemon/:id/move",
        views: {
            'menuContent': {
                templateUrl: "templates/pokemon-move.html",
                controller: 'PokemonMoveCtrl'
            }
        }
    });

    $stateProvider.state('app.moves', {
        url: "/moves",
        views: {
            'menuContent': {
                templateUrl: "templates/moves.html",
                controller: 'MovesCtrl'
            }
        }
    });

    $stateProvider.state('app.types', {
        url: "/types",
        views: {
            'menuContent': {
                templateUrl: "templates/types.html",
                controller: 'TypesCtrl'
            }
        }
    });
    
    $stateProvider.state('app.type', {
        url: "/type/:typeId",
        views: {
            'menuContent': {
                templateUrl: "templates/type.html",
                controller: 'TypeCtrl'
            }
        }
    });
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/pokemons');
});
